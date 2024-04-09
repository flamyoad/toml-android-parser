/*
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.8.1-Beta")
    implementation('org.jetbrains.kotlinx:kotlinx-coroutines-core:1.8.1-Beta')
    implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core:1.8.1-Beta'

    [libs.versions.toml]
    coroutines-android = { group = "org.jetbrains.kotlinx", name = "kotlinx-coroutines-android", version.ref = "coroutines" }

    [build.gradle]
 */
function parse() {      
    const input = document.getElementById("library-input").value.trim();

    // Regular expression to extract configuration such as implementation, testImplementation, androidTestImplementation etc
    const configurationRegex = /^(\w+)/;
    const configuration = configurationRegex.exec(input);

    // Regular expression to extract group, name, and version from input
    const listRegex = /['"](.*):(.*):(.*)(?:['"]|\))/;
    const list = listRegex.exec(input);
    
    console.log(configuration);
    console.log(list);

    const group = list[1];
    const name = list[2];
    const version = list[3].replace(/['"]/g, "");

    const tomlTextArea = document.getElementById("toml");
    tomlTextArea.value = `${name} = { group = "${group}", name = "${name}", version.ref = "${version}" }`;

    const buildGradleTextArea = document.getElementById("build-gradle");
    const buildGradleValue = name.replace(/-/g, ".");
    buildGradleTextArea.value = `${configuration[0]}(libs.${buildGradleValue})`;

}  