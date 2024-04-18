Based on the paper of Alan Turing and David Champernowne's chess engine which they wrote in 1948. 
Inspired by (Link)[https://en.chessbase.com/post/reconstructing-turing-s-paper-machine]

Assigns points to each piece.

So, the value of a position would be -> Sum of all the pieces that White has (W) / Sum of all the pieces that Black has (B) = W / B. However, in some implementations Turing suggested using W - B yields better results so we are using W - B.

Considerable Moves: Moves like 1. Captures 2. Checkmates, etc. Moves which result in no change of the Value of a position are not considered. Basically, we take in consideration the moves that change the Value of a Position. A Position with no Considerable Moves is a Dead Position.

Uses Min-Max Algorithm to calculate Considerable Moves

Is it always that the Material Value matters? What about the Positional Value? Imagine White plays e4, Black has no Considerable Moves, thus, the W / B value becomes 1, For this Turing defined -> Position Play Value which is defined on a Set of Rules, interesting to note Turing said that these Rules are based on his style of play and often it makes the same type of mistakes Turing would make while playing, in a sense you are Playing against Turing when you play against this Engine. 

Positional Play Value Rules For a (Q, R, B, N):
1. The square root of the number of moves the piece can make from the position, counting a capture as two moves, and not forgetting that the King must not be left in check. 
This rule takes into consideration the fact that mobility of pieces is very important, for eg, A Knight placed near the centre of the chessboard has greater mobility in the sense that it can control more squares. Basically, it increases the area under control we have from our pieces where the more area we control the better are our chances of winning.

2. (If not a Q) 1,0 if it is defended, and an additional 0.5 if twice defended.
This rule adds incentive to defending our pieces, if its defended once we add 1.0 to the PPV and 0.5 if defended twice.

3. For moves other than castling as (1) above.

4. It is necessary to make some allowance for the vulnerability of the K. This can be done by assuming it is to be replaced by a friendly Q on the same square, estimating as in (1), but subtracting instead of adding.
What this means is basically subtracting King Exposure. Done by replacing the King with the Queen and checking the Mobility of the Queen (1).

5. 1.0 for the possibility of castling later not being lost by moves of K or Rooks, a further 1.0 if castling could take place on the next move, and yet another 1.0 for the actual performance of castling.

6. 0.2 for each rank advanced.

7. 0.3 for being defended by atleast one piece (not P).

For the Black K, count
8. 1.0 for the threat of Checkmate.

9. 0.5 for Check.

Turing doesnt mention in the paper how to combine the Material Value and the Positional Play Value to derive a Formula...?
The formula we use in our implementation is, 100 * MV + PPV, we want to give heavy preference to the Material Value because we do not want to lose Material!!! Imagine, we have two moves one with a Greater MV and one with a Lesser PPV value, we will prefer the move with the Greater MV, because