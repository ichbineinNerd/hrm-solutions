callback({
  "levelNumber": 21,
  "size": 9,
  "steps": 60,
  "successRatio": 1,
  "author": "albertferras",
  "hash": "ea1630f750407a811410534c3b12a5aa",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 9/10 - SPEED 92/72 --\n\na:\n    COPYFROM 5\nb:\n    COPYTO   0\n    INBOX   \n    JUMPZ    c\n    ADD      0\n    JUMP     b\nc:\n    COPYFROM 0\n    OUTBOX  \n    JUMP     a\n\n"
});