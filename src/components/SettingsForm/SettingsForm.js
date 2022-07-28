import { useContext, useState } from 'react';
import { FormGroup, Label, ControlGroup, RadioGroup, Radio } from '@blueprintjs/core';
import { SettingsContext } from '../../Context/Settings';
import useForm from '../../hooks/form';

const SettingsForm = () => {

  const [defaultValues] = useState({});
  const { showCompletedItem, updateItemsPerScreen, updateSortField, setUserPreferences } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useForm(changeSettings, defaultValues);

  function changeSettings(newSettings) {
    console.log('newSettings: ', newSettings);
    showCompletedItem(newSettings.completed);
    updateItemsPerScreen(newSettings.itemsPerScreen);
    updateSortField(newSettings.sort);
    setUserPreferences();
  }

  return (
    <>
      <FormGroup onSubmit={handleSubmit}>

        <Label id="change-prefs-form-label">Change Preferences</Label>

        <ControlGroup id="preferences">

          <RadioGroup label="Show completed tasks in list?">            
            <Radio
            label="Show completed in list"
            onChange={handleChange}
            value="show">
            </Radio>

            <Radio
            label="Don't show completed in list"
            onChange={handleChange}
            value="doNotShow">
            </Radio>
          </RadioGroup>

          <Label>
            Number of items to show
            <input onChange={handleChange} required name="itemsPerScreen" type="text" placeholder="Quantity" />
          </Label>

          <Label>
            Sort By
            <input onChange={handleChange} required defaultValue={defaultValues.difficulty} type="text" name="sort" />
          </Label>

          <Label>
            <button type="submit">Change Preferences</button>
          </Label>
        </ControlGroup>

      </FormGroup>
    </>
  )
}

export default SettingsForm