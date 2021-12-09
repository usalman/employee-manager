import React from "react";

const AddEmployee = ({
  employees,
  setEmployees,
  showGraphs,
  setShowGraphs,
  setMaleInfo,
  setFemaleInfo,
  setDestekInfo,
  setMuhasebeInfo,
  setAnalizInfo,
  setYazilimInfo,
  setYonetimInfo,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const startDate = new Date(e.currentTarget.startDate.value);
    const quitDate =
      e.currentTarget.quitDate.value === ""
        ? new Date()
        : new Date(e.currentTarget.quitDate.value);
    const workDays = Math.floor(
      Math.abs(quitDate - startDate) / (1000 * 3600 * 24)
    );

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
  };

  function calculateWorkDays(property, value) {
    const workers = employees.filter(
      (employee) => employee[property] === value
    );
    const workDays = [];
    workers.forEach((worker) => {
      workDays.push(worker.workDays);
    });

    const minworkDays = Math.min(...workDays);
    const maxworkDays = Math.max(...workDays);
    let total = 0;
    workDays.forEach((workDay) => (total += workDay));
    const averageworkDays = Math.round((total / workDays.length) * 10) / 10;

    return [minworkDays, maxworkDays, averageworkDays];
  }

  const handleClick = () => {
    const [minMaleWorkDays, maxMaleWorkDays, averageMaleWorkDays] =
      calculateWorkDays("gender", "male");
    const [minFemaleWorkDays, maxFemaleWorkDays, averageFemaleWorkDays] =
      calculateWorkDays("gender", "female");

    const [
      minDestekGroupWorkDays,
      maxDestekGroupWorkDays,
      averageDestekGroupWorkDays,
    ] = calculateWorkDays("group", "destek");

    const [
      minMuhasebeGroupWorkDays,
      maxMuhasebeGroupWorkDays,
      averageMuhasebeGroupWorkDays,
    ] = calculateWorkDays("group", "muhasebe");

    const [
      minAnalizGroupWorkDays,
      maxAnalizGroupWorkDays,
      averageAnalizGroupWorkDays,
    ] = calculateWorkDays("group", "analiz");

    const [
      minYazilimGroupWorkDays,
      maxYazilimGroupWorkDays,
      averageYazilimGroupWorkDays,
    ] = calculateWorkDays("group", "yazilim");

    const [
      minYonetimGroupWorkDays,
      maxYonetimGroupWorkDays,
      averageYonetimGroupWorkDays,
    ] = calculateWorkDays("group", "yonetim");

    setMaleInfo({
      minMaleWorkDays,
      maxMaleWorkDays,
      averageMaleWorkDays,
    });

    setFemaleInfo({
      minFemaleWorkDays,
      maxFemaleWorkDays,
      averageFemaleWorkDays,
    });

    setDestekInfo({
      minDestekGroupWorkDays,
      maxDestekGroupWorkDays,
      averageDestekGroupWorkDays,
    });

    setMuhasebeInfo({
      minMuhasebeGroupWorkDays,
      maxMuhasebeGroupWorkDays,
      averageMuhasebeGroupWorkDays,
    });

    setAnalizInfo({
      minAnalizGroupWorkDays,
      maxAnalizGroupWorkDays,
      averageAnalizGroupWorkDays,
    });

    setYazilimInfo({
      minYazilimGroupWorkDays,
      maxYazilimGroupWorkDays,
      averageYazilimGroupWorkDays,
    });

    setYonetimInfo({
      minYonetimGroupWorkDays,
      maxYonetimGroupWorkDays,
      averageYonetimGroupWorkDays,
    });

    setShowGraphs(!showGraphs);
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
      <button type="button" onClick={handleClick}>
        Grafikleri Göster
      </button>
    </div>
  );
};

export default AddEmployee;
