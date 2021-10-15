import React from 'react'

export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        let valueToUse = ''
        const { name, value, checked, type } = evt.target;
        console.log('1',name,'2',value ,'3',checked,'4',type)
        type === 'checkbox'? valueToUse = true : valueToUse = value
        // const valueToUse = type === 'checkbox' ? checked : value;
        // console.log(name,valueToUse,'change')
        change(name, valueToUse);
    }

    return (

    <form id='pizza-form' onsubmit={onSubmit}>
        <div className='form-submit'>
            <h2>Let's Make a Pizza!</h2>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
                <div>{errors.instructions}</div>
            </div>
        </div>

    <div className='form-group inputs'>
    <label>Name
            <input
            id='name-input'
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
            />
        </label>
        <label>Special instructions
            <input
            id='special-text'
            value={values.instructions}
            onChange={onChange}
            name='instructions'
            type='text'
            />
        </label>
        {/* dropdown */}
        <label>Size
            <select 
        id='size-dropdown'
        onChange={onChange}
        values={values.size}
        name='size'
        >
            <option value=''>- Select a Size -</option>
            <option value='S'>Small</option>
            <option value='M'>Medium</option>
            <option value='L'>Large</option>
            <option value='XL'>Family Style</option>
          </select>
        </label>
        {/* radio buttons */}
        <label> Alfredo
            <input
            type='radio'
            name='sauce'
            value='Alfredo'
            onChange={onChange}
            checked={values.sauce === 'Alfredo'}
            />
        </label>
        <label> Tomato
        <input
            type="radio"
            name="sauce"
            value="Tomato"
            onChange={onChange}
            checked={values.sauce === "Tomato"}
          />        
        </label>
        <label> BBQ
          <input
            type="radio"
            name="sauce"
            value="BBQ"
            onChange={onChange}
            checked={values.sauce === "BBQ"}
          />
        </label>
        <label>Parmesan
          <input
            type="radio"
            name="sauce"
            value="Parmesan"
            onChange={onChange}
            checked={values.sauce === "Parmesan"}
          />
        </label>
    </div>
    <div className='form-group checkboxes'>
        <h3>Toppings</h3> 
           {/* checkboxes */}
           <label>
          <input
            type="checkbox"
            name="pepperoni"
            onChange={onChange}
            checked={values.pepperoni}
          />
        </label>Pepperoni

        <label>
          <input
            type="checkbox"
            name="mushrooms"
            onChange={onChange}
            checked={values.mushrooms}
          />
        </label>Mushrooms

        <label>
          <input
            type="checkbox"
            name="extraCheese"
            onChange={onChange}
            checked={values.extraCheese}
          />
        </label>Extra Cheese

        
        <label>
          <input
            type="checkbox"
            name="gabagool"
            onChange={onChange}
            checked={values.gabagool}
          />
        </label>Gabagool
        <button id='order-button' disabled={disabled}>Submit your order!</button>

    </div>
</form>
    )
}
