import React from 'react';
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className='shipping'>
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label htmlFor="house_no">House No</label>
            <input type='text' id='house_no' placeholder='Enter your House No.' />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input type='text' id='city' placeholder='Enter your City' />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <select id='country'>
              <option value="">Country</option>
              {
                Country && Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}> {i.name} </option>
                ))
              }
            </select>
          </div>

          <div>
            <label htmlFor="state">state</label>
            <select id='state'>
              <option value="">state</option>
              {
                State && State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}> {i.name} </option>
                ))
              }
            </select>
          </div>

          <div>
            <label htmlFor="pincode">Pincode</label>
            <input type='number' id='pincode' placeholder='Enter Pincode' />
          </div>

          <div>
            <label htmlFor="phone_no">Mobile No</label>
            <input type="number" id='phone_no' placeholder='Enter Your Mobile No' />
          </div>

          <button type='submit'>Confirm Order</button>

        </form>
      </main>
    </section>
  )
}

export default Shipping;