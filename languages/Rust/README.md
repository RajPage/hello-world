Rust Version used:

> rustc 1.68.2

## Simple

1. Install [rustup](https://rustup.rs/). You'll also need a C compiler. Install one corresponding to your OS. You may need to restart your terminal for PATH change to take effect
2. Compile the file.
   > rustc hello_world.rs
3. Depending on your OS (Win or Unix) different file will be generated. Run accordingly
   > .\hello_world.exe  
   > ./hello_world

## Cargo

1. Install rustup
2. Go to cargo folder and build the package. This will create a target build
   > cargo build
3. Run the binary depending on your OS
   > ./target/debug/cargo  
   > .\target\debug\cargo.exe
4. You can also run and build in one command
   > cargo run
5. Finally we can build without creating binaries
   > cargo check
