# Awesome VHDL by VHDLwhiz

VHDL support for Visual Studio Code

[VHDL by VHDLwhiz](https://github.com/jonasjj/awesome-vhdl) is a fork of the [puorc.awesome-vhdl](https://github.com/puorc/awesome-vhdl) plugin with altered  snippets that conform to the [VHDLwhiz](https://vhdlwhiz.com) coding style. It includes templates for VHDL modules, testbenches, and ModelSim DO scripts.

I've forked my favorite VHDL plugin to make it better. Save time by using this plugin to generate the initial project files for you!

## Features
- syntax highlighting
- code snippets
- code completion
- brace matching
- line and block commenting

## DO script (Tcl) snippets

| Snippet       | Description                                   |
|          ---: |                                          ---: |
| modelsimrundo | Generate a run.do script for a VHDL testbench |

## VHDL snippets

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

Install from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=vhdlwhiz.vhdl-by-vhdlwhiz) or by searching for "**vhdlwhiz.vhdl-by-vhdlwhiz**" in the Extension view (Ctrl+Shift+X) in VSCode.

## License
This extension is licensed under the MIT License. Please see the third-party notices file for details on the third-party binaries that we include with releases of this project.