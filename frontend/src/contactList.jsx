import React from "react"

const ContactList = ({ contacts }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contacts) => (
                        <tr key={contacts.id}>
                            <td>
                                {contacts.firstName}
                            </td>
                            <td>
                                {contacts.lastName}
                            </td>
                            <td>
                                {contacts.email}
                            </td>
                            <button>Update</button>
                            <button>Delete</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ContactList