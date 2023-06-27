import React from "react";
import Button from "./Button"
export function PostList(){
    return (
        <div style={{justifyContent: 'center',
        alignItems: 'center'}}>
            <div style={{border: '1px solid',
            borderRadius:'5px'}}>
            <Button name="按钮1"/>
            <Button name="按钮2"/>
            <Button name="按钮3"/>
            <Button name="按钮4"/>
            <Button name="按钮5"/>
            </div>
        </div>
    );
}