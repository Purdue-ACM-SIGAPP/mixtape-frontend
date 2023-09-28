
        movq    $format3, %rdi
        movq    %rcx, %rsi
        call    printf
        movq    $0, %rdi
        movq    $n, %rsi
        cqo
        idivq   %rdx
        movq    %rax, %rdi
        movq    $format4, %rdi
        call    printf