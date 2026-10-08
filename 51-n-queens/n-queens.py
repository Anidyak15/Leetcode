class Solution:
    def solveNQueens(self, n):
        result = []
        board = [["."] * n for _ in range(n)]

        cols = set()
        diagonals1 = set()   # r - c
        diagonals2 = set()   # r + c

        def backtrack(row):
            if row == n:
                result.append(["".join(row) for row in board])
                return

            for col in range(n):

                # Check if column or diagonal is already occupied
                if col in cols or (row - col) in diagonals1 or (row + col) in diagonals2:
                    continue

                # Place Queen
                board[row][col] = "Q"
                cols.add(col)
                diagonals1.add(row - col)
                diagonals2.add(row + col)

                backtrack(row + 1)

                # Backtrack
                board[row][col] = "."
                cols.remove(col)
                diagonals1.remove(row - col)
                diagonals2.remove(row + col)

        backtrack(0)
        return result