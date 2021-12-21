import React from "react";

const AddEmployee = ({ employees, setEmployees, graphView, setGraphView }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const startDate = new Date(e.currentTarget.startDate.value);
    const quitDate =
      e.currentTarget.quitDate.value === ""
        ? new Date()
        : new Date(e.currentTarget.quitDate.value);
    const workDays = Math.floor((quitDate - startDate) / (1000 * 3600 * 24));

    setEmployees([
      ...employees,
      {
        name: e.currentTarget.name.value,
        gender: e.currentTarget.gender.value,
        group: e.currentTarget.group.value,
        startDate: e.currentTarget.startDate.value,
        quitDate: e.currentTarget.quitDate.value,
        workDays: workDays,
      },
    ]);
    alert(e.currentTarget.name.value + " eklendi");
  };

  const toggleGraphView = () => {
    setGraphView(!graphView);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="submitForm">
        <div className="formGroupContainer1">
          <div className="formGroup">
            <label htmlFor="">İsim</label>
            <input type="text" name="name" />
          </div>
          <div className="formGroup">
            <label>Cinsiyet</label>
            <select name="gender" className="genderSelect">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="formGroup">
            <label>Grup</label>
            <select name="group" className="groupSelect">
              <option value="destek">Destek</option>
              <option value="muhasebe">Muhasebe</option>
              <option value="analiz">Analiz</option>
              <option value="yazilim">Yazılım</option>
              <option value="yonetim">Yönetim</option>
            </select>
          </div>
          <div className="formGroup">
            <label>İşe Giriş Tarihi</label>
            <input type="date" name="startDate" />
          </div>
          <div className="formGroup">
            <label>İşten Çıkış Tarihi</label>
            <input type="date" name="quitDate" />
          </div>
          <div className="formButtonGroup">
            <button type="submit" className="button submitButton">
              Ekle
            </button>
            <button
              type="button"
              className="button clickButton"
              onClick={toggleGraphView}
            >
              Grafikleri Göster
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
