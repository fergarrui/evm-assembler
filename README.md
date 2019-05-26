# evm-assembler
Assembler for Ethereum Virtual Machine

Simple and lightweight EVM assembler. 
It does not import any additional dependencies

### example

function `assemble` is exported

```
assemble([
  ['PUSH1', '69'],
  ['SUB'],
  ['STOP']
])
```
assemble expects an array of arrays. Every element of the array is an array containing `[opcode, argument]`
Only `PUSH` opcodes can have an argument

would return: `60690300`
