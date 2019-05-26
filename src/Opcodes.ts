export class Opcodes {
  static opcodes = {}

  static populate() {
    this.opcodes['STOP'] = '00'
    this.opcodes['ADD'] = '01'
    this.opcodes['MUL'] = '02'
    this.opcodes['SUB'] = '03'
    this.opcodes['DIV'] = '04'
    this.opcodes['SDIV'] = '05'
    this.opcodes['MOD'] = '06'
    this.opcodes['SMOD'] = '07'
    this.opcodes['ADDMOD'] = '08'
    this.opcodes['MULMOD'] = '09'
    this.opcodes['EXP'] = '0a'
    this.opcodes['SIGNEXTEND'] = '0b'
    this.opcodes['LT'] = '10'
    this.opcodes['GT'] = '11'
    this.opcodes['SLT'] = '12'
    this.opcodes['SGT'] = '13'
    this.opcodes['EQ'] = '14'
    this.opcodes['ISZERO'] = '15'
    this.opcodes['AND'] = '16'
    this.opcodes['OR'] = '17'
    this.opcodes['XOR'] = '18'
    this.opcodes['NOT'] = '19'
    this.opcodes['BYTE'] = '1a'
    this.opcodes['SHL'] = '1b'
    this.opcodes['SHR'] = '1c'
    this.opcodes['SAR'] = '1d'
    this.opcodes['SHA3'] = '20'
    this.opcodes['ADDRESS'] = '30'
    this.opcodes['BALANCE'] = '31'
    this.opcodes['ORIGIN'] = '32'
    this.opcodes['CALLER'] = '33'
    this.opcodes['CALLVALUE'] = '34'
    this.opcodes['CALLDATALOAD'] = '35'
    this.opcodes['CALLDATASIZE'] = '36'
    this.opcodes['CALLDATACOPY'] = '37'
    this.opcodes['CODESIZE'] = '38'
    this.opcodes['CODECOPY'] = '39'
    this.opcodes['GASPRICE'] = '3a'
    this.opcodes['EXTCODESIZE'] = '3b'
    this.opcodes['EXTCODECOPY'] = '3c'
    this.opcodes['RETURNDATASIZE'] = '3d'
    this.opcodes['RETURNDATACOPY'] = '3e'
    this.opcodes['BLOCKHASH'] = '40'
    this.opcodes['COINBASE'] = '41'
    this.opcodes['TIMESTAMP'] = '42'
    this.opcodes['NUMBER'] = '43'
    this.opcodes['DIFFICULTY'] = '44'
    this.opcodes['GASLIMIT'] = '45'
    this.opcodes['POP'] = '50'
    this.opcodes['MLOAD'] = '51'
    this.opcodes['MSTORE'] = '52'
    this.opcodes['MSTORE8'] = '53'
    this.opcodes['SLOAD'] = '54'
    this.opcodes['SSTORE'] = '55'
    this.opcodes['JUMP'] = '56'
    this.opcodes['JUMPI'] = '57'
    this.opcodes['PC'] = '58'
    this.opcodes['MSIZE'] = '59'
    this.opcodes['GAS'] = '5a'
    this.opcodes['JUMPDEST'] = '5b'
    this.opcodes['PUSH1'] = '60'
    this.opcodes['PUSH2'] = '61'
    this.opcodes['PUSH3'] = '62'
    this.opcodes['PUSH4'] = '63'
    this.opcodes['PUSH5'] = '64'
    this.opcodes['PUSH6'] = '65'
    this.opcodes['PUSH7'] = '66'
    this.opcodes['PUSH8'] = '67'
    this.opcodes['PUSH9'] = '68'
    this.opcodes['PUSH10'] = '69'
    this.opcodes['PUSH11'] = '6a'
    this.opcodes['PUSH12'] = '6b'
    this.opcodes['PUSH13'] = '6c'
    this.opcodes['PUSH14'] = '6d'
    this.opcodes['PUSH15'] = '6e'
    this.opcodes['PUSH16'] = '6f'
    this.opcodes['PUSH17'] = '70'
    this.opcodes['PUSH18'] = '71'
    this.opcodes['PUSH19'] = '72'
    this.opcodes['PUSH20'] = '73'
    this.opcodes['PUSH21'] = '74'
    this.opcodes['PUSH22'] = '75'
    this.opcodes['PUSH23'] = '76'
    this.opcodes['PUSH24'] = '77'
    this.opcodes['PUSH25'] = '78'
    this.opcodes['PUSH26'] = '79'
    this.opcodes['PUSH27'] = '7a'
    this.opcodes['PUSH28'] = '7b'
    this.opcodes['PUSH29'] = '7c'
    this.opcodes['PUSH30'] = '7d'
    this.opcodes['PUSH31'] = '7e'
    this.opcodes['PUSH32'] = '7f'
    this.opcodes['DUP1'] = '80'
    this.opcodes['DUP2'] = '81'
    this.opcodes['DUP3'] = '82'
    this.opcodes['DUP4'] = '83'
    this.opcodes['DUP5'] = '84'
    this.opcodes['DUP6'] = '85'
    this.opcodes['DUP7'] = '86'
    this.opcodes['DUP8'] = '87'
    this.opcodes['DUP9'] = '88'
    this.opcodes['DUP10'] = '89'
    this.opcodes['DUP11'] = '8a'
    this.opcodes['DUP12'] = '8b'
    this.opcodes['DUP13'] = '8c'
    this.opcodes['DUP14'] = '8d'
    this.opcodes['DUP15'] = '8e'
    this.opcodes['DUP16'] = '8f'
    this.opcodes['SWAP1'] = '90'
    this.opcodes['SWAP2'] = '91'
    this.opcodes['SWAP3'] = '92'
    this.opcodes['SWAP4'] = '93'
    this.opcodes['SWAP5'] = '94'
    this.opcodes['SWAP6'] = '95'
    this.opcodes['SWAP7'] = '96'
    this.opcodes['SWAP8'] = '97'
    this.opcodes['SWAP9'] = '98'
    this.opcodes['SWAP10'] = '99'
    this.opcodes['SWAP11'] = '9a'
    this.opcodes['SWAP12'] = '9b'
    this.opcodes['SWAP13'] = '9c'
    this.opcodes['SWAP14'] = '9d'
    this.opcodes['SWAP15'] = '9e'
    this.opcodes['SWAP16'] = '9f'
    this.opcodes['LOG0'] = 'a0'
    this.opcodes['LOG1'] = 'a1'
    this.opcodes['LOG2'] = 'a2'
    this.opcodes['LOG3'] = 'a3'
    this.opcodes['LOG4'] = 'a4'
    this.opcodes['CREATE'] = 'f0'
    this.opcodes['CALL'] = 'f1'
    this.opcodes['CALLCODE'] = 'f2'
    this.opcodes['RETURN'] = 'f3'
    this.opcodes['DELEGATECALL'] = 'f4'
    this.opcodes['STATICCALL'] = 'fa'
    this.opcodes['REVERT'] = 'fd'
    this.opcodes['INVALID'] = 'fe'
    this.opcodes['SELFDESTRUCT'] = 'ff'
   }
}

Opcodes.populate()