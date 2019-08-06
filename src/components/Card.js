import React from 'react';

class Card extends React.Component {
    render() {
        const active = this.props.active;
        const z_index = ((parseInt(this.props.z_index, 10) + parseInt(this.props.time, 10)) % 4)
        const createClassName = `carousel__cell${active ? ' active' : ''}${z_index === 0 ? ' transparent' : ''}`
        return (

                <div className={createClassName} style={{zIndex: `${z_index}`}}>
                    <div className="container">
                        <img className="hard-img" src={this.props.asset.card} alt="Error"/>
                        <p className="money">{this.props.asset.money}</p>
                        <p className="earning">
                            You earn: 
                            <br />
                            {this.props.asset.earning}
                        </p>
                        <img className="logo" src={this.props.asset.logo} alt="Error"/>
                    </div>
                </div>

        )
    }
}

export default Card;