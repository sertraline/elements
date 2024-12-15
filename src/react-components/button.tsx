// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { JSX } from "react"

import { ButtonStyle, buttonStyle } from "../theme/button.css"
import { Button as Btn } from "@mui/joy"
import { CssVarsProvider, extendTheme } from "@mui/joy/styles"

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: "#000000",
        },
        neutral: {
          plainColor: "var(--joy-palette-text-primary)",
        },
      },
    },
  },
})
// required since interfaces cannot extend types whose properties are not statically known
type buttonStyle = ButtonStyle & Record<string, unknown>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    buttonStyle {
  header: string
  fullWidth?: boolean
  className?: string
}

export const Button = ({ header: title, ...props }: any): JSX.Element => (
  <CssVarsProvider theme={theme}>
    <Btn
      sx={{ marginTop: "1rem" }}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      type={props.type}
    >
      {title}
    </Btn>
  </CssVarsProvider>
  // <div className={className}>
  //   <button
  //     className={buttonStyle({ size, variant })}
  //     style={{ width: fullWidth ? "100%" : "auto" }}
  //     {...props}
  //   >
  //     {title}
  //   </button>
  // </div>
)
