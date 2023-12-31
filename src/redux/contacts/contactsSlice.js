import { createSlice } from "@reduxjs/toolkit";
import { addContact, getContacts, deleteContact } from "../../redux/contacts/contactsOperations";

const initialState = {
    items: [],
    isLoading: false,
    error: false
}

const handlePending = (state) => {
    state.error = false
    state.isLoading = true
}

const handleFulfilled = (state, { payload }) => {
    state.items = payload
    state.isLoading = false
}

const handleRejected = (state) => {
    state.error = true
    state.isLoading = false
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getContacts.pending, handlePending)
            .addCase(getContacts.fulfilled, handleFulfilled)
            .addCase(getContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.items.push(payload)
                state.isLoading = false
                state.error = false
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                const index = state.items.findIndex(contact => {
                    return contact.id === payload.id
                })

                state.items.splice(index, 1)
                state.isLoading = false
                state.error = false
            })
            .addCase(deleteContact.rejected, handleRejected)
    }
});

export const contactsReducer = contactsSlice.reducer
