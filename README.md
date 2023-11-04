# VHDL by VHDLwhiz

VHDL support for Visual Studio Code

[VHDL by VHDLwhiz](https://github.com/jonasjj/awesome-vhdl) is a fork of the [puorc.awesome-vhdl](https://github.com/puorc/awesome-vhdl) plugin with altered  snippets that conform to the [VHDLwhiz](https://vhdlwhiz.com) coding style. It includes templates for VHDL modules, testbenches, and ModelSim DO scripts.

I've forked my favorite VHDL plugin to make it better. Save time by using this plugin to generate the initial project files for you!

## What's new in version 1.3.0
* Emacs-like stutter mode

## What's new in version 1.2.16 (November 2, 2023)
* Fixing issues with auto indent after BEGIN, THEN, LOOP, IS, and WHEN statements
* Fixing dedent that was not working after END keywords
* Split "i" snippet into "ift" (IF-THEN) and "ifte" (IF-THEN-ELSE)
* Changing "wu" (wait until) snippet to use rising_edge(clk) instead of clk = '1'
* Syntax highlighting for DEALLOCATE, FORCE, and RELEASE
* Fixed wrong range in "typarr" (array) snippet
* Adding support for the VHDL BLOCK statement

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

<table>
<thead>
<tr><th>Snippet</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>as</td><td>assert default severity</td></tr>
<tr><td>asw</td><td>assert warning</td></tr>
<tr><td>ase</td><td>assert error</td></tr>
<tr><td>asf</td><td>assert failure</td></tr>
<tr><td>arch</td><td>architecture</td></tr>
<tr><td>c</td><td>constant</td></tr>
<tr><td>ca</td><td>case</td></tr>
<tr><td>decr</td><td>sig <= sig - 1</td></tr>
<tr><td>el</td><td>else</td></tr>
<tr><td>eli</td><td>elsif</td></tr>
<tr><td>ent</td><td>entity</td></tr>
<tr><td>entarch</td><td>entity architecture</td></tr>
<tr><td>fa</td><td>falling_edge()</td></tr>
<tr><td>fo</td><td>for loop</td></tr>
<tr><td>fun</td><td>function</td></tr>
<tr><td>gen</td><td>for generate</td></tr>
<tr><td>ift</td><td>if-then</td></tr>
<tr><td>ifte</td><td>if-then-else</td></tr>
<tr><td>incr</td><td>sig <= sig + 1</td></tr>
<tr><td>int</td><td>integer</td></tr>
<tr><td>intd</td><td>integer range x downto y</td></tr>
<tr><td>intt</td><td>integer range x to y</td></tr>
<tr><td>o0</td><td>others => '0')</td></tr>
<tr><td>o1</td><td>others => '1')</td></tr>
<tr><td>ox</td><td>others => 'X')</td></tr>
<tr><td>pack</td><td>package</td></tr>
<tr><td>pro</td><td>process</td></tr>
<tr><td>proar</td><td>asynch process with reset</td></tr>
<tr><td>profsm</td><td>FSM process</td></tr>
<tr><td>pros</td><td>synch process</td></tr>
<tr><td>prosr</td><td>synch process with reset</td></tr>
<tr><td>proc</td><td>procedure</td></tr>
<tr><td>rep</td><td>report a message</td></tr>
<tr><td>ri</td><td>rising_edge()</td></tr>
<tr><td>s</td><td>signal</td></tr>
<tr><td>sh</td><td>shared variable</td></tr>
<tr><td>si</td><td>signed</td></tr>
<tr><td>sid</td><td>signed(x downto y)</td></tr>
<tr><td>sit</td><td>signed(x to y)</td></tr>
<tr><td>sir</td><td>signed(sig'range)</td></tr>
<tr><td>sl</td><td>std_logic</td></tr>
<tr><td>slv</td><td>std_logic_vector</td></tr>
<tr><td>slvd</td><td>std_logic_vector(x downto y)</td></tr>
<tr><td>slvt</td><td>std_logic_vector(x to y)</td></tr>
<tr><td>slvr</td><td>std_logic_vector(sig'range)</td></tr>
<tr><td>toi</td><td>to_integer(sig)</td></tr>
<tr><td>tos</td><td>to_signed(-1, sig'length)</td></tr>
<tr><td>tou</td><td>to_unsigned(0, sig'length)</td></tr>
<tr><td>typarr</td><td>array type</td></tr>
<tr><td>typfsm</td><td>FSM type/signal</td></tr>
<tr><td>typrec</td><td>record type</td></tr>
<tr><td>un</td><td>unsigned</td></tr>
<tr><td>und</td><td>unsigned(x downto y)</td></tr>
<tr><td>unt</td><td>unsigned(x to y)</td></tr>
<tr><td>unr</td><td>unsigned(sig'range)</td></tr>
<tr><td>v</td><td>variable</td></tr>
<tr><td>vhdl</td><td>VHDL template</td></tr>
<tr><td>vhdltb</td><td>VHDL testbench template</td></tr>
<tr><td>w</td><td>when STATE =></td></tr>
<tr><td>wh</td><td>while loop</td></tr>
<tr><td>wf</td><td>wait for</td></tr>
<tr><td>wo</td><td>wait on</td></tr>
<tr><td>wu</td><td>wait until</td></tr>
</tbody>
</table>

## Installation

Install from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=vhdlwhiz.vhdl-by-vhdlwhiz) or by searching for "**vhdlwhiz.vhdl-by-vhdlwhiz**" in the Extension view (Ctrl+Shift+X) in VSCode.

## License
This extension is licensed under the MIT License. Please see the third-party notices file for details on the third-party binaries that we include with releases of this project.