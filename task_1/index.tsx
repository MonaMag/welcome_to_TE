import { Component } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component
const FirstComponent = React.memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.
const SecondComponentBase = ({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

function propsAreEqual(prev: IProps, next: IProps) {
    return prev.user.name === next.user.name &&
           prev.user.age === next.user.age;
}

export const SecondComponent = React.memo(SecondComponentBase, propsAreEqual);

// class component
class ThirdComponent extends React.PureComponent<IUser> {
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// class component
class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(nextProps: IProps) {
        return (
            this.props.user.name !== nextProps.user.name ||
            this.props.user.age !== nextProps.user.age
        );
    }
    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}
