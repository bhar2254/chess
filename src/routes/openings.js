//  api.js

import { Hono } from 'hono';
import { rawHtmlResponse } from '../@bhar2254/std'
import { Page } from '../@bhar2254/bs-dom'
import { SQLCrud } from '../@bhar2254/sql-d1'
import { playableBoardMoves } from '../@bhar2254/chess-bot'

const router = new Hono();

const board = (board, start) => {
    return `
      <script>
            var board = null

            var config = {
                position: '${start ? start : '8/8/8/8/8/8/8/8 w - - 0 1'}',
                pieceTheme: 'https://bhar2254.github.io/src/img/chesspieces/chess.com/cat/{piece}.png'
            }
            ${board} = Chessboard('${board}', config)
      </script>`
}

router.get('/', async (c) => {
    const db = c.env.DB
    const positions = new SQLCrud(db, 'positions')
    const { results } = await positions.read({where: {tag: 'openings'}});
    if( !results )
        console.log(`positions NOT FOUND in D1! `)
    const accordionElement = (args) => {
        if(!args)
            return 'No arguments provided to accordion!'
        const name = args.name || 'name not defined'
        const index = args.index || ''
        const fen = args.fen || 'fen not defined'
        const short_description = args.short_description || 'Short_description not defined'
        const short_name = args.short_name || 'short_name not defined'
        const source = args.source || 'source not defined'
        return `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-${short_name}">
                        ${name}
                    </button>
                </h2>
                ${short_name !== 'queens-gambit' ? `<script>
                    $(document).ready(function() {
                        $('#accordion-${short_name}').collapse({
                            toggle: false
                        })
                    });
                </script>` : ``}
                <div id="accordion-${short_name}" class="accordion-collapse collapse show" data-bs-parent="#openingsAccordion">
                    <div class="accordion-body">
                        <div class="row">
                            <div class="text-center col-lg-6">
                                <p>${short_description}</p>
                                <hr>
                                <div class="btn-group">
                                    <a href="/openings/${short_name}" class="btn btn-secondary mt-2">Play the position</a>
                                    <a href="${source}" class="btn btn-primary mt-2">Learn More</a>
                                </div>
                            </div>
                            <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                                <div id="board${index}" style="touch-action:none;" class="m-0 p-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${board(`board${index}`, fen)}`
    }
    const accordion = []
    for ( const [ i, each ] of results.entries() ) {
        each.index = i
        accordion.push(accordionElement(each))
    }
    const body = `<div class="py-5 container">
        <h1>Overview of Chess Openings</h1>
        <p>Chess openings are the first moves of a game, setting the stage for the middle game. Here are some popular openings:</p>
        <div class="accordion" id="openingsAccordion">
            ${accordion.join(' ')}
        </div>
    </div>`
    const page = new Page({ pageTitle: 'Openings', body })
    return rawHtmlResponse(page.render())
});

router.get('/:short_name', async (c) => {
    const short_name = c.req.param('short_name')
    const db = c.env.DB
    const positions = new SQLCrud(db, 'positions')
    const { results } = await positions.read({where: {short_name}});
    if( !results )
        console.log(`positions NOT FOUND in D1! `)
    const { fen, moves = "[]", name, description, black_counterplay, white_plan } = results[0]
    console.log(moves)
    const body = `
        <div class="py-5 container">
        <nav aria-label="breadcrumb" class="bg-body-tertiary rounded-3 p-3 shadow-lg">
            <div class="row">
                <ol class="px-3 breadcrumb mb-0 d-flex justify-content-center align-items-center">
                    <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li class="breadcrumb-item" aria-current="page"><a href="/openings">Openings</a></li>
                    <li class="ms-auto"></li>
                </ol>
            </div>
        </nav>
        <hr>
        <h2 class="text-center">${name}</h2>
        <hr>
        ${description}
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-lg-6 col-md-11 table-responsive">
                <div id="board" style="touch-action:none;" class="m-0 p-0"></div>
            </div>
        </div>
        <hr>
        <div class="g-4 row">
            <div class="mx-auto col-md-6 col-sm-11">
                <h2>Counter-Play for Black</h2>
                <hr>
                ${black_counterplay}
            </div>
            <div class="mx-auto col-md-6 col-sm-11">
                <h2>Options for White</h2>
                <hr>
                ${white_plan}
            </div>
        </div>
    </div>
    ${playableBoardMoves('board', moves)}`
    const page = new Page({ pageTitle: 'Home', body })
    return rawHtmlResponse(page.render())
});

export default router