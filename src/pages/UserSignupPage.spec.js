import React from 'react';
import {render,cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {UserSignupPage} from './UserSignupPage';

beforeEach(cleanup);

describe("UserSignupPage",() => {
    describe('Layout',() => {
        it('has header of Sign Up',() => {
            const {container} = render(<UserSignupPage/>);
            const header = container.querySelector('h1');
            expect(header).toHaveTextContent('Sign Up');
        })

        it('has input for display name',() => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>);
            const displayNameInput = queryByPlaceholderText('Your display name')
            expect(displayNameInput).toBeInTheDocument();
        })

        it('has input for username',() => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>);
            const usernameinput = queryByPlaceholderText('Your username')
            expect(usernameinput).toBeInTheDocument();
        })
        it('has input for password',() => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>);
            const passwordInput = queryByPlaceholderText('Your password')
            expect(passwordInput).toBeInTheDocument();
        })
        it('has type password input',() => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>);
            const passwordInput = queryByPlaceholderText('Your password')
            expect(passwordInput.type).toBe('password');
        })
        it('has input for password repeat',() => {
            const {queryByPlaceholderText} = render(<UserSignupPage/>);
            const passwordrepeatInput = queryByPlaceholderText('Repeat your password')
            expect(passwordrepeatInput).toBeInTheDocument();
        })
        it('has submit button',() => {
            const {container} = render(<UserSignupPage/>);
            const button = container.querySelector('button')
            expect(button).toBeInTheDocument();
        })
        describe('Interactions',() => {
            const changeEvent = (content) => {
                return { 
                        target: {
                        value: content
                    }
                }
            };
            it('has input for displayName value into state',() => {
                const {queryByPlaceholderText} = render(<UserSignupPage/>);
                const displayNameInput = queryByPlaceholderText('Your display name')
                
                fireEvent.change(displayNameInput,changeEvent('my-display-name'));
                expect(displayNameInput).toHaveValue('my-display-name');
            })
            it('has input for username value into state',() => {
                const {queryByPlaceholderText} = render(<UserSignupPage/>);
                const usernameinput = queryByPlaceholderText('Your username')
                
                fireEvent.change(usernameinput,changeEvent('my-username'));
                expect(usernameinput).toHaveValue('my-username');
            })
        })
    }) 
})