callback({
  "levelNumber": 26,
  "size": 15,
  "steps": 76,
  "successRatio": 1,
  "type": "obsolete",
  "author": "FireGoblin",
  "hash": "0b97bde448fd5a89601c3ea05e2ae9c4",
  "path": "26-Small-Divide-15.76/15.76.obsolete-FireGoblin.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 26-Small-Divide - SIZE 15/15 - 76/76 --\n\n-- This solution is superseded by 15.71-ekx.asm being functionally same with\n-- further optimization.\n\na:\n    COPYFROM 9\n    COPYTO   7\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\nb:\n    COPYFROM 0\n    SUB      1\n    JUMPN    c\n    COPYTO   0\n    BUMPUP   7\n    JUMP     b\nc:\n    COPYFROM 7\n    OUTBOX  \n    JUMP     a\n\n"
});