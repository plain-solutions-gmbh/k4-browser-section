<?php


//Remove the following line to get this plugin running properly:
kirby()->impersonate('kirby');

Kirby::plugin("microman/browsersection", [
    "sections" => [
        "browser" => [],
    ],
]);
