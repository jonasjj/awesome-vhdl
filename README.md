# Awesome VHDL (VHDLwhiz edition)

VHDL support for Visual Studio Code

[This fork](https://github.com/jonasjj/awesome-vhdl) of the [awesome-vhdl](https://github.com/puorc/awesome-vhdl) plugin has altered snippets that conform to the [VHDLwhiz](https://vhdlwhiz.com) coding style. 

## Features
- syntax highlighting
- code snippets
- code completion
- brace matching
- line and block commenting

## VHDLwhiz-style snippets

When you type a snippet in a VHDL file and hit Enter, the plugin will generate template code for you. Then, use the Tab key to move the cursor to the next placeholder.

| Snippet | Description                  |
|     ---:|                         ---: |                  
| as      | assert default severity      |
| asw     | assert warning               |
| ase     | assert error                 |
| asf     | assert failure               |
| arch    | architecture                 |
| c       | constant                     |
| cas     | case                         |
| el      | else                         |
| eli     | elsif                        |
| ent     | entity                       |
| entarch | entity architecture          |
| f       | for loop                     |
| fun     | function                     |
| gen     | for generate                 |
| i       | if else                      |
| int     | integer                      |
| intd    | integer range x downto y     |
| intt    | integer range x to y         |
| o0      | (others => '0')              |
| o1      | (others => '1')              |
| pack    | package                      |
| pro     | process                      |
| proar   | asynch process with reset    |
| pros    | synch process                |
| prosr   | synch process with reset     |
| proc    | procedure                    |
| rep     | report a message             |
| s       | signal                       |
| sig     | signed(x downto y)           |
| sigr    | signed(sig'range)            |
| sl      | std_logic                    |
| slv     | std_logic_vector(x downto y) |
| slvr    | std_logic_vector(sig'range)  |
| typarr  | array type                   |
| typfsm  | FSM type/signal              |
| typrec  | record type                  |
| uns     | unsigned(x downto y)         |
| unsr    | unsigned(sig'range)          |
| v       | variable                     |
| vhdl    | VHDL template                |
| vhdltb  | VHDL testbench template      |
| w       | while                        |
| wf      | wait for                     |
| wo      | wait on                      |
| wu      | wait until                   |                

## Installation

The VHDLwhiz edition of awesome-vhdl is not on Visual Studio Marketplace. You have to install it from file.

1. Download [vhdlwhiz.awesome-vhdl.vsix](https://github.com/jonasjj/awesome-vhdl/blob/master/vhdlwhiz.awesome-vhdl.vsix) from the Git repository.
2. In VSCode, hit Ctrl+Shift+P to bring up the command palette.
3. Type "install from vsix" and hit Enter

## License
This extension is licensed under the MIT License. Please see the
third-party notices file for details on the third-party
binaries that we include with releases of this project.