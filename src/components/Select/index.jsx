import React, { Component } from "react"

const Select = ({ onChange, list, value }) => (
    <select onChange={onChange} value={value}>
        {list.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
        ))}
    </select>
)

export default Select