Kotlin + JRE Version used:

> kotlinc-jvm 1.9.0 (JRE 1.8.0_371-b11)

1. Download and unzip the latest version from [GitHub Releases](https://github.com/JetBrains/kotlin/releases).
2. Add the bin directory to the system path.
3. Run the code
   > kotlinc hello_world.kt -include-runtime -d hello_world.jar && java -jar hello_world.jar
