const { describe, it } = require("node:test");
const fs = require("fs");
const assert = require("assert");
const { generateErrorSummary } = require("../src/detailed-error-summary");

describe("generateErrorSummary", () => {
  it("should generate the error summary by taking the linter output json", () => {
    const linterReport = [
      {
        filePath:
          "/Users/rajkumarbuddha/projects/linter-report/resources/.repos/lordeadroid/vending-machine/lib/testing-framework.js",
        messages: [
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 10,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 11,
            endColumn: 1,
            fix: { range: [169, 169], text: ";" },
          },
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 20,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 21,
            endColumn: 1,
            fix: { range: [375, 375], text: ";" },
          },
          {
            ruleId: "complexity",
            severity: 2,
            message: "Function has a complexity of 5. Maximum allowed is 2.",
            line: 58,
            column: 23,
            nodeType: "FunctionExpression",
            messageId: "complex",
            endLine: 74,
            endColumn: 2,
          },
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 74,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 75,
            endColumn: 1,
            fix: { range: [1597, 1597], text: ";" },
          },
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 81,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 82,
            endColumn: 1,
            fix: { range: [1812, 1812], text: ";" },
          },
        ],
        suppressedMessages: [],
        errorCount: 11,
        fatalErrorCount: 0,
        warningCount: 0,
        fixableErrorCount: 9,
        fixableWarningCount: 0,
        source: "",
        usedDeprecatedRules: [],
      },
      {
        filePath:
          "/Users/rajkumarbuddha/projects/linter-report/resources/.repos/lordeadroid/vending-machine/src/vending-machine.js",
        messages: [
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 3,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 4,
            endColumn: 1,
            fix: { range: [99, 99], text: ";" },
          },
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 7,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 8,
            endColumn: 1,
            fix: { range: [184, 184], text: ";" },
          },
          {
            ruleId: "complexity",
            severity: 2,
            message: "Function has a complexity of 3. Maximum allowed is 2.",
            line: 9,
            column: 20,
            nodeType: "FunctionExpression",
            messageId: "complex",
            endLine: 19,
            endColumn: 2,
          },
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 19,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 20,
            endColumn: 1,
            fix: { range: [394, 394], text: ";" },
          },
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 33,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 33,
            endColumn: 3,
            fix: { range: [672, 672], text: ";" },
          },
          {
            ruleId: "no-param-reassign",
            severity: 2,
            message: "Assignment to function parameter 'amount'.",
            line: 41,
            column: 5,
            nodeType: "Identifier",
            messageId: "assignmentToFunctionParam",
            endLine: 41,
            endColumn: 11,
          },
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 45,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 46,
            endColumn: 1,
            fix: { range: [944, 944], text: ";" },
          },
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 59,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 60,
            endColumn: 1,
            fix: { range: [1279, 1279], text: ";" },
          },
          {
            ruleId: "semi",
            severity: 2,
            message: "Missing semicolon.",
            line: 59,
            column: 2,
            nodeType: "VariableDeclaration",
            messageId: "missingSemi",
            endLine: 60,
            endColumn: 1,
            fix: { range: [1279, 1279], text: ";" },
          },
        ],
        suppressedMessages: [],
        errorCount: 8,
        fatalErrorCount: 0,
        warningCount: 0,
        fixableErrorCount: 6,
        fixableWarningCount: 0,
        source: "",
        usedDeprecatedRules: [],
      },
    ];

    const expected = {
      missingSemi: 11,
      assignmentToFunctionParam: 1,
      complex: 2,
    };

    assert.deepStrictEqual(generateErrorSummary(linterReport), expected);
  });
});