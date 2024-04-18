import { Chess } from "./chess";
import TurochampAlgo from './TuroChamp/turoChampAlgo.js';

onmessage = (e) =>{
    const fen = e.data;
    const game = new Chess();
    game.load(fen);
    const turochamp = new TurochampAlgo(game);
    postMessage(JSON.stringify(turochamp.findNextMove()));
}