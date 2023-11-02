import argparse

def process_vhdl_file(file_path, spaces_per_indent):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    processed_lines = []
    for line in lines:
        leading_spaces = len(line) - len(line.lstrip(' '))
        tab_count = leading_spaces // spaces_per_indent if leading_spaces % spaces_per_indent == 0 else 0
        processed_line = tab_count * '\\t' + line[tab_count * spaces_per_indent :]
        processed_line = processed_line.replace('\n', '\\n')
        processed_line = processed_line.replace('"', '\\"')
        processed_lines.append(processed_line)

    processed_content = ''.join(processed_lines)
    print(processed_content + '\n')

def main():
    parser = argparse.ArgumentParser(description= \
        'Utility script for generating the "body" part of VHDL snippets for the snippets.json file. '
        'Read a VHDL file and replace tabs with \\t and newlines with \\n.')
    parser.add_argument('file', type=str, help='Path to the VHDL file to be processed.')
    parser.add_argument('--spaces', type=int, default=2, help='Number of spaces per indentation level to convert to tabs.')
    args = parser.parse_args()

    process_vhdl_file(args.file, args.spaces)

if __name__ == '__main__':
    main()
