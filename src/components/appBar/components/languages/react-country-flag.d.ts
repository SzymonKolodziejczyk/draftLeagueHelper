declare module "react-country-flag" {
  import * as React from "react";
  export interface ReactCountryFlagProps {
    countryCode: string;
    style: { width: string; height: string };
    svg: boolean;
  }
  export default class ReactCountryFlag extends React.Component<
    ReactCountryFlagProps,
    any
  > {}
}
