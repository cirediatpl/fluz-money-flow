import React from 'react';
import AnimatedNumber from 'react-animated-number';

const values = {}
values[0] = 0.00
values[1] = 1.14
values[2] = 1.64
values[3] = 1.94

class EarningContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            bigValue: 0.00,
            updates: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.update(), 1600);
        this.interval = setInterval(() => this.mountUnmount(), 11000)
    }

    update() {
        const {updates} = this.state;

        this.setState({
            bigValue: values[updates],
            updates: (updates + 1) % 4
        });
    }

    mountUnmount() {
        const {updates} = this.state;

        this.setState({
            updates: (updates + 1) % 4
        });
    }

    render() {
        const {bigValue} = this.state;

        return (
            <div style={{marginTop: 50}}>
                <div>
                    <svg width={600} height={150}>
                        <g transform=" translate(50,100)">
                            <AnimatedNumber
                                style={{
                                    transition: '0.8s ease-out',
                                    fontSize: 48,
                                    transitionProperty:
                                        'background-color, color, opacity'
                                }}
                                frameStyle={perc => (
                                    perc === 100 ? {} : {opacity: 0.25}
                                )}
                                stepPrecision={2}
                                duration={500}
                                value={bigValue}
                                component="text"
                                formatValue={n => `$${n}`}/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default EarningContainer;