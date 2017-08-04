#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <emscripten/emscripten.h>

int main(int argc, char ** argv) {
    // gets translated to console.log
    printf("WebAssembly successfully loaded!\n");
}

// Emscripten does dead code elimination during compilation.
// This decorator ensures our code does not get removed.
EMSCRIPTEN_KEEPALIVE
int generateRandom() {
    srand ( time(NULL) );
    return rand();
}
