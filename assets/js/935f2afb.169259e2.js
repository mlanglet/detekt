"use strict";(self.webpackChunkdetekt_website=self.webpackChunkdetekt_website||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"defaultSidebar":[{"type":"link","label":"Welcome","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Changelog and Migration Guide","href":"/docs/introduction/changelog","docId":"introduction/changelog"},{"type":"link","label":"Changelog and Migration Guide - Pre 1.0.0","href":"/docs/introduction/changelog-rc","docId":"introduction/changelog-rc"},{"type":"link","label":"Detekt Configuration File","href":"/docs/introduction/configurations","docId":"introduction/configurations"},{"type":"link","label":"Reporting","href":"/docs/introduction/reporting","docId":"introduction/reporting"},{"type":"link","label":"Configuration for Compose","href":"/docs/introduction/compose","docId":"introduction/compose"},{"type":"link","label":"Suppressing Issues","href":"/docs/introduction/suppressing-rules","docId":"introduction/suppressing-rules"},{"type":"link","label":"Code Smell Baseline","href":"/docs/introduction/baseline","docId":"introduction/baseline"},{"type":"link","label":"Suppressors","href":"/docs/introduction/suppressors","docId":"introduction/suppressors"},{"type":"link","label":"Extending detekt","href":"/docs/introduction/extensions","docId":"introduction/extensions"},{"type":"link","label":"Using Snapshots","href":"/docs/introduction/snapshots","docId":"introduction/snapshots"},{"type":"link","label":"Compatibility Table","href":"/docs/introduction/compatibility","docId":"introduction/compatibility"}]},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Run detekt using Command Line Interface","href":"/docs/gettingstarted/cli","docId":"gettingstarted/cli"},{"type":"link","label":"Run detekt using the Detekt Gradle Plugin","href":"/docs/gettingstarted/gradle","docId":"gettingstarted/gradle"},{"type":"link","label":"Run detekt using Gradle Task","href":"/docs/gettingstarted/gradletask","docId":"gettingstarted/gradletask"},{"type":"link","label":"Run detekt using Maven Ant Task","href":"/docs/gettingstarted/mavenanttask","docId":"gettingstarted/mavenanttask"},{"type":"link","label":"Using Type Resolution","href":"/docs/gettingstarted/type-resolution","docId":"gettingstarted/type-resolution"},{"type":"link","label":"Run detekt using a Git pre-commit hook","href":"/docs/gettingstarted/git-pre-commit-hook","docId":"gettingstarted/git-pre-commit-hook"}]},{"type":"category","label":"rules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Comments Rule Set","href":"/docs/rules/comments","docId":"rules/comments"},{"type":"link","label":"Complexity Rule Set","href":"/docs/rules/complexity","docId":"rules/complexity"},{"type":"link","label":"Coroutines Rule Set","href":"/docs/rules/coroutines","docId":"rules/coroutines"},{"type":"link","label":"Empty-blocks Rule Set","href":"/docs/rules/empty-blocks","docId":"rules/empty-blocks"},{"type":"link","label":"Exceptions Rule Set","href":"/docs/rules/exceptions","docId":"rules/exceptions"},{"type":"link","label":"Formatting Rule Set","href":"/docs/rules/formatting","docId":"rules/formatting"},{"type":"link","label":"Naming Rule Set","href":"/docs/rules/naming","docId":"rules/naming"},{"type":"link","label":"Performance Rule Set","href":"/docs/rules/performance","docId":"rules/performance"},{"type":"link","label":"Potential-bugs Rule Set","href":"/docs/rules/potential-bugs","docId":"rules/potential-bugs"},{"type":"link","label":"Style Rule Set","href":"/docs/rules/style","docId":"rules/style"}]}]},"docs":{"gettingstarted/cli":{"id":"gettingstarted/cli","title":"Run detekt using Command Line Interface","description":"Install the cli","sidebar":"defaultSidebar"},"gettingstarted/git-pre-commit-hook":{"id":"gettingstarted/git-pre-commit-hook","title":"Run detekt using a Git pre-commit hook","description":"Detekt can be integrated into your development workflow by using a Git pre-commit hook.","sidebar":"defaultSidebar"},"gettingstarted/gradle":{"id":"gettingstarted/gradle","title":"Run detekt using the Detekt Gradle Plugin","description":"Detekt requires Gradle 6.1 or higher. We, however, recommend using the version of Gradle that is listed in this table.","sidebar":"defaultSidebar"},"gettingstarted/gradletask":{"id":"gettingstarted/gradletask","title":"Run detekt using Gradle Task","description":"1. Add following lines to your build.gradle file.","sidebar":"defaultSidebar"},"gettingstarted/mavenanttask":{"id":"gettingstarted/mavenanttask","title":"Run detekt using Maven Ant Task","description":"1. Add following lines to your pom.xml.","sidebar":"defaultSidebar"},"gettingstarted/type-resolution":{"id":"gettingstarted/type-resolution","title":"Using Type Resolution","description":"This page describes how to use detekt\'s type resolution feature.","sidebar":"defaultSidebar"},"intro":{"id":"intro","title":"Welcome","description":"detekt logo","sidebar":"defaultSidebar"},"introduction/baseline":{"id":"introduction/baseline","title":"Code Smell Baseline","description":"With the cli option --baseline or the detekt-gradle-plugin closure-property baseline you can specify a file which is used to generate a baseline.xml.","sidebar":"defaultSidebar"},"introduction/changelog":{"id":"introduction/changelog","title":"Changelog and Migration Guide","description":"1.20.0 - 2022-04-14","sidebar":"defaultSidebar"},"introduction/changelog-rc":{"id":"introduction/changelog-rc","title":"Changelog and Migration Guide - Pre 1.0.0","description":"\x3c!--","sidebar":"defaultSidebar"},"introduction/compatibility":{"id":"introduction/compatibility","title":"Compatibility Table","description":"Detekt Support Commitment","sidebar":"defaultSidebar"},"introduction/compose":{"id":"introduction/compose","title":"Configuration for Compose","description":"Relevant rule sets and their configuration options for Compose styles & usage. The following are being used as reference for Compose usage:","sidebar":"defaultSidebar"},"introduction/configurations":{"id":"introduction/configurations","title":"Detekt Configuration File","description":"detekt uses a YAML style configuration file for various things:","sidebar":"defaultSidebar"},"introduction/extensions":{"id":"introduction/extensions","title":"Extending detekt","description":"The following page describes how to extend detekt and how to customize it to your domain-specific needs.","sidebar":"defaultSidebar"},"introduction/reporting":{"id":"introduction/reporting","title":"Reporting","description":"Formats","sidebar":"defaultSidebar"},"introduction/snapshots":{"id":"introduction/snapshots","title":"Using Snapshots","description":"This page explains how you can use our latest snapshots to test upcoming unreleased features.","sidebar":"defaultSidebar"},"introduction/suppressing-rules":{"id":"introduction/suppressing-rules","title":"Suppressing Issues","description":"detekt supports the Java (@SuppressWarnings) and Kotlin (@Suppress) style suppression.","sidebar":"defaultSidebar"},"introduction/suppressors":{"id":"introduction/suppressors","title":"Suppressors","description":"The Suppressors are a tool that you can use to customize the reports of detekt. They allow you to (surprise) suppress some issues detected by some rules, and they can be applied to any rule.","sidebar":"defaultSidebar"},"rules/comments":{"id":"rules/comments","title":"Comments Rule Set","description":"This rule set provides rules that address issues in comments and documentation","sidebar":"defaultSidebar"},"rules/complexity":{"id":"rules/complexity","title":"Complexity Rule Set","description":"This rule set contains rules that report complex code.","sidebar":"defaultSidebar"},"rules/coroutines":{"id":"rules/coroutines","title":"Coroutines Rule Set","description":"The coroutines rule set analyzes code for potential coroutines problems.","sidebar":"defaultSidebar"},"rules/empty-blocks":{"id":"rules/empty-blocks","title":"Empty-blocks Rule Set","description":"The empty-blocks ruleset contains rules that will report empty blocks of code","sidebar":"defaultSidebar"},"rules/exceptions":{"id":"rules/exceptions","title":"Exceptions Rule Set","description":"Rules in this rule set report issues related to how code throws and handles Exceptions.","sidebar":"defaultSidebar"},"rules/formatting":{"id":"rules/formatting","title":"Formatting Rule Set","description":"This rule set provides wrappers for rules implemented by ktlint - https://ktlint.github.io/.","sidebar":"defaultSidebar"},"rules/naming":{"id":"rules/naming","title":"Naming Rule Set","description":"The naming ruleset contains rules which assert the naming of different parts of the codebase.","sidebar":"defaultSidebar"},"rules/performance":{"id":"rules/performance","title":"Performance Rule Set","description":"The performance rule set analyzes code for potential performance problems.","sidebar":"defaultSidebar"},"rules/potential-bugs":{"id":"rules/potential-bugs","title":"Potential-bugs Rule Set","description":"The potential-bugs rule set provides rules that detect potential bugs.","sidebar":"defaultSidebar"},"rules/style":{"id":"rules/style","title":"Style Rule Set","description":"The Style ruleset provides rules that assert the style of the code.","sidebar":"defaultSidebar"}}}')}}]);