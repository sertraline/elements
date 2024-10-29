// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { locales as supportedLanguages } from "../../../locales"
import { expect } from "@playwright/test"

type TemplateStrings = {
  [k in keyof typeof supportedLanguages.en]: string[]
}

describe("Translations", () => {
  let templates: Partial<TemplateStrings>

  beforeAll(() => {
    const en = supportedLanguages.en
    templates = {}
    for (const [key, value] of Object.entries(en)) {
      const matches = value.match(/\{.+?}/g)
      if (!matches) {
        continue
      }
      templates[key] = matches
    }
  })

  for (const [language, translation] of Object.entries(supportedLanguages)) {
    test(`language keys and templates match [${language}]`, () => {
      expect(
        Object.keys(translation).sort(),
        `expected locales/${language}.json to contain all supported keys`,
      ).toEqual(Object.keys(supportedLanguages.en).sort())
    })
  }

  // TODO: Re-enable, once we have a proper routine for translations
  // test("template strings are present in translations", () => {
  //   Object.entries(supportedLanguages).forEach(([, translation]) => {
  //     Object.entries(templates).forEach(([key, templateStrings]) => {
  //       for (const templateString of templateStrings) {
  //         expect(
  //           translation[key as keyof typeof supportedLanguages.en],
  //         ).toContain(templateString)
  //       }
  //     })
  //   })
  // })

  test("translations have no missing keys", () => {
    const enKeys = Object.keys(supportedLanguages.en)
    for (const [_language, translation] of Object.entries(supportedLanguages)) {
      const translationKeys = Object.keys(translation)
      const missingKeys = enKeys.filter((key) => !translationKeys.includes(key))
      expect(missingKeys).toEqual([])
    }
  })
})
