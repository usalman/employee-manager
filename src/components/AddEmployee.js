import React from "react";

const AddEmployee = ({ employees, setEmployees, showGraphs, setShowGraphs }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    setEmployees([
      ...employees,
      {
        name: e.currentTarget.name.value,
        gender: e.currentTarget.gender.value,
        group: e.currentTarget.group.value,
        startDate: e.currentTarget.startDate.value,
        quitDate: e.currentTarget.quitDate.value,
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Adı:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Cinsiyeti</label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Grubu</label>
          <select name="group">
            <option value="destek">Destek</option>
            <option value="muhasebe">Muhasebe</option>
            <option value="analiz">Analiz</option>
            <option value="yazilim">Yazılım</option>
            <option value="yonetim">Yönetim</option>
          </select>
        </div>
        <div>
          <label>İşe Giriş Tarihi:</label>
          <input type="date" name="startDate" />
        </div>
        <div>
          <label>İşten Çıkış Tarihi:</label>
          <input type="date" name="quitDate" />
        </div>
        <button type="submit">Ekle</button>
      </form>
      <button type="button" onClick={() => setShowGraphs(true)}>Grafikleri Göster</button>
    </div>
  );
};

export default AddEmployee;
