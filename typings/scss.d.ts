declare module '*.scss' {
    const classes: { [className: string]: string };
    export default classes;
  }

declare module '*.jpg' {
  const value: string;
  export = value;
}