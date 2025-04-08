if status is-interactive
    # Commands to run in interactive sessions can go here
end

eval "$(/opt/homebrew/bin/brew shellenv)"

alias fzf "fzf --preview 'bat --style=numbers --color=always {}'"
alias fdir "cd (fzf --preview='bat --style=numbers --color=always {}' --walker=dir)"

set -x PATH /Users/piperinnshall/Developer/scripts/* $PATH

# >>> add all sourced compiled programs to path >>>
for dir in (find /Users/piperinnshall/Developer/src -type d -name 'bin')
    set -x PATH $PATH $dir
end

set -x GPG_TTY (tty)

test -e {$HOME}/.iterm2_shell_integration.fish ; and source {$HOME}/.iterm2_shell_integration.fish

thefuck --alias | source

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
if test -f /opt/homebrew/Caskroom/miniconda/base/bin/conda
    eval /opt/homebrew/Caskroom/miniconda/base/bin/conda "shell.fish" "hook" $argv | source
else
    if test -f "/opt/homebrew/Caskroom/miniconda/base/etc/fish/conf.d/conda.fish"
        . "/opt/homebrew/Caskroom/miniconda/base/etc/fish/conf.d/conda.fish"
    else
        set -x PATH "/opt/homebrew/Caskroom/miniconda/base/bin" $PATH
    end
end
# <<< conda initialize <<<

