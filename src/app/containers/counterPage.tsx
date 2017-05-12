import * as React from 'react';
import CounterContainer from "../../counter/containers/counterContainer";

interface ICounterPageProps extends React.Props<any> {};

export default function CounterPage(props: ICounterPageProps) {
return (
    <CounterContainer />
  );
}
