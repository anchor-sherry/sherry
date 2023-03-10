module.exports = {
  "plugins": [
    "@trivago/prettier-plugin-sort-imports"
  ],
  "printWidth": 120,
  "tabWidth": 2,
  "semi": true,
  "trailingComma": "all",
  "singleQuote": false,
  "endOfLine": "lf",
  "proseWrap": "never",
  "importOrder": [
    "<THIRD_PARTY_MODULES>",
    "^@echo/(.*)$",
    "^@/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "importOrderCaseInsensitive": true,
  "importOrderGroupNamespaceSpecifiers": true
}
