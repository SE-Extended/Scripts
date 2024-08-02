// ==SE_module==
// name: custom_toast
// displayName: Custom Toast
// description: A Script that shows a custom toast on the startup of Snapchat.
// version: 1.5
// author: Gabriel Modz, Jacob Thomas & Suryadip Sarkar
// ==/SE_module==

var networking = require("networking");
var messaging = require("messaging");
var config = require("config");
var im = require("interface-manager");
var ipc = require("ipc");
var javaInterfaces = require("java-interfaces");
var hooker = require("hooker");
var events = require("events");

var settingsContext = {
        events: [],
};

var defaultPrompt = "Welcome back to Snapchat";

function createManagerToolBoxUI() {
    settingsContext.events.push({
        start: function (builder) {
            builder.row(function (builder) {
                builder.textInput("Type a Custom Toast here", config.get("customPrompt", defaultPrompt), function (value) {
                    config.set("customPrompt", value, true);
                }) .maxLines(8)
                   .singleLine(false);
            });

            builder.row(function (builder) {
                builder.button("Test Custom Toast", function () {
                    testCustomToast();
                });
            });
        },
    });
}

function testCustomToast() {
    const customPrompt = String(config.get("customPrompt")) || defaultPrompt;
    longToast(customPrompt);
}
  
module.onSnapMainActivityCreate = activity => {
        const customPrompt = String(config.get("customPrompt")) || defaultPrompt;
        longToast(customPrompt);
}

function createInterface() {
        createManagerToolBoxUI();
}

function start(_) {
        createInterface();
}

start();

im.create("settings" /* EnumUI.SETTINGS */, function (builder, args) {
        settingsContext.events.forEach(function (event) {
            event.start(builder, args);
        });
});