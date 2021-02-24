# VHDL by VHDLwhiz

VHDL support for Visual Studio Code

[VHDL by VHDLwhiz](https://github.com/jonasjj/awesome-vhdl) is a fork of the [puorc.awesome-vhdl](https://github.com/puorc/awesome-vhdl) plugin with altered  snippets that conform to the [VHDLwhiz](https://vhdlwhiz.com) coding style. It includes templates for VHDL modules, testbenches, and ModelSim DO scripts.

I've forked my favorite VHDL plugin to make it better. Save time by using this plugin to generate the initial project files for you!

## What's new in version 1.2.12 (February 25, 2021)
* Improved run.do ModelSim script snippet ("modelsimrundo")
  * Less reloading of the wave window
  * Support for nested testbench projects and wave.do files
  * Print verbose message if wave.do file doesn't exist
  * Fixed runtime error for designs with no signals or constants

## Demo video

[![Demo of the VHDL by VHDLwhiz VSCode plugin](https://raw.githubusercontent.com/jonasjj/awesome-vhdl/master/images/youtube-thumb.png)](https://youtu.be/V7zlAAjid98)

## Features
- Syntax highlighting
- Code snippets
- Code completion
- Brace matching
- Line and block commenting

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
| ca      | case                         |
| decr    | sig <= sig - 1               |
| el      | else                         |
| eli     | elsif                        |
| ent     | entity                       |
| entarch | entity architecture          |
| fa      | falling_edge()               |
| fo      | for loop                     |
| fun     | function                     |
| gen     | for generate                 |
| i       | if else                      |
| incr    | sig <= sig + 1               |
| int     | integer                      |
| intd    | integer range x downto y     |
| intt    | integer range x to y         |
| o0      | (others => '0')              |
| o1      | (others => '1')              |
| pack    | package                      |
| pro     | process                      |
| proar   | asynch process with reset    |
| profsm  | FSM process                  |
| pros    | synch process                |
| prosr   | synch process with reset     |
| proc    | procedure                    |
| rep     | report a message             |
| ri      | rising_edge()                |
| s       | signal                       |
| si      | signed                       |
| sid     | signed(x downto y)           |
| sit     | signed(x to y)               |
| sir     | signed(sig'range)            |
| sl      | std_logic                    |
| slv     | std_logic_vector             |
| slvd    | std_logic_vector(x downto y) |
| slvt    | std_logic_vector(x to y)     |
| slvr    | std_logic_vector(sig'range)  |
| toi     | to_integer(sig)              |
| tos     | to_signed(-1, sig'length)    |
| tou     | to_unsigned(0, sig'length)   |
| typarr  | array type                   |
| typfsm  | FSM type/signal              |
| typrec  | record type                  |
| un      | unsigned                     |
| und     | unsigned(x downto y)         |
| unt     | unsigned(x to y)             |
| unr     | unsigned(sig'range)          |
| v       | variable                     |
| vhdl    | VHDL template                |
| vhdltb  | VHDL testbench template      |
| w       | when STATE =>                |
| wh      | while loop                   |
| wf      | wait for                     |
| wo      | wait on                      |
| wu      | wait until                   |                

## Installation

Install from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=vhdlwhiz.vhdl-by-vhdlwhiz) or by searching for "**vhdlwhiz.vhdl-by-vhdlwhiz**" in the Extension view (Ctrl+Shift+X) in VSCode.

## License
This extension is licensed under the MIT License. Please see the third-party notices file for details on the third-party binaries that we include with releases of this project.