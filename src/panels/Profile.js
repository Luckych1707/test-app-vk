import React from 'react';
import {FormLayoutGroup, PanelHeader, Button} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge'

class Profile extends React.Component {

    subscribe = () => {
    bridge.send("VKWebAppJoinGroup",{'group_id': 199123846}).then(data => {
    console.log(data);
    })}

    repost = () => {
    bridge.send("VKWebAppShowWallPostBox", {"message": "Мое тестовое VK Mini Apps приложение"})}

    render () {
        return (
            <FormLayoutGroup>
                <PanelHeader>Об авторе</PanelHeader>
                <p>dfgdfgdfgdfg</p>
                <Button
                    onClick={() => this.subscribe() }
                >Подписаться на сообщество</Button>
                <Button
                    onClick={() => this.repost() }
                >Поделиться</Button>
            </FormLayoutGroup>
        )
    }
}
export default Profile


