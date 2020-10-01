import React from 'react'
import {Select, FormLayout, Button, FormLayoutGroup, Input, PanelHeader} from '@vkontakte/vkui'
import PropTypes from "prop-types"
import axios from 'axios'


class Converter extends React.Component {
    static get propTypes () {
        return {
            go: PropTypes.any,
            id: PropTypes.string,

        }
    }
    constructor (props) {
        super(props);

        this.state = {
            valute: {},
            firstSelector: 'RUB',
            secondSelector:'USD'
        };
    }


    componentDidMount() {
        axios.get("https://api.exchangerate-api.com/v4/latest/RUB").then((res) => {
            this.setState({
                valute: res.data.rates
            })
        })
    }

    render () {
        return (
            <FormLayoutGroup>
                <PanelHeader>Конвертер</PanelHeader>
                <FormLayout>
                    <Select
                        top="Конвертировать из"
                        value={this.state.firstSelector}
                        onChange={(evt) => this.setState({ firstSelector: evt.target.value })}
                        placeholder="Выбирете валюту"
                    >
                        {Object.keys(this.state.valute).map(valute => (
                            <option key={valute} value={valute}>
                                {valute}
                            </option>
                        ))}
                    </Select>
                    <FormLayoutGroup top="Количество">
                        <Input type="text" defaultValue="" />
                    </FormLayoutGroup>
                </FormLayout>
                <FormLayout>
                    <Select top="Конвертировать в"
                            value={this.state.secondSelector}
                            onChange={(evt) => this.setState({ secondSelector: evt.target.value })}
                            placeholder="Выбирете валюту"
                    >
                        {Object.keys(this.state.valute).map(valute => (
                        <option key={valute} value={valute}>
                            {valute}
                        </option>
                        ))}
                    </Select>
                    <FormLayoutGroup top="Результат">
                        <Input type="text" defaultValue="" />
                    </FormLayoutGroup>
                    <Button size="xl" mode="secondary">Сохоанить</Button>
                </FormLayout>
            </FormLayoutGroup>
        )
    }
}

export default Converter;
