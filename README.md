# evm-assembler
[![npm version](https://badge.fury.io/js/evm-assembler.svg)](https://badge.fury.io/js/evm-assembler)

Assembler for Ethereum Virtual Machine

Simple and lightweight EVM assembler. 
It does not import any additional dependencies

### Install

`npm i --save evm-assembler`

### example

function `assemble` is exported

```
assemble([
  ['PUSH1', '66'],
  ['SUB'],
  ['STOP']
])
```
assemble expects an array of arrays. Every element of the array is an array containing `[opcode, argument]`
Only `PUSH` opcodes can have an argument

would return: `60660300`
