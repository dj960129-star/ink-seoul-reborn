import { useId, useMemo, useState } from "react";
import "./BookingForm.css";

type ResidencyStatus = "indefinitely" | "temporarily";
type AvailableDays = "weekdays" | "weekends" | "flexible";
type Genre =
  | "mini"
  | "japanese"
  | "blackwork"
  | "anime"
  | "blackGreyRealistic"
  | "color"
  | "microFineLine"
  | "others";
type ColorPreference = "color" | "noColor" | "";

const GENRES: Array<{ value: Genre; label: string }> = [
  { value: "mini", label: "Mini (lettering or symbols)" },
  { value: "japanese", label: "Japanese" },
  { value: "blackwork", label: "Blackwork" },
  { value: "anime", label: "Anime/Manga" },
  { value: "blackGreyRealistic", label: "Black & Grey Realistic" },
  { value: "color", label: "Color" },
  { value: "microFineLine", label: "Micro/Fine Line" },
  { value: "others", label: "Others" },
];

const RESIDENCY: Array<{
  value: ResidencyStatus;
  label: string;
  help: string;
}> = [
  {
    value: "indefinitely",
    label: "I am living in Korea indefinitely.",
    help: "장기 거주(비자/거소/외국인등록 등)로 한국에 지속적으로 체류 중입니다.",
  },
  {
    value: "temporarily",
    label: "I am visiting or living in Korea temporarily.",
    help: "관광/단기 체류 등으로 한국에 잠시 머무르고 있습니다.",
  },
];

const DAYS: Array<{ value: AvailableDays; label: string }> = [
  { value: "weekdays", label: "Weekdays" },
  { value: "weekends", label: "Weekends" },
  { value: "flexible", label: "Flexible" },
];

const BookingForm = () => {
  const formId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [genre, setGenre] = useState<Genre | "">("");
  const [residency, setResidency] = useState<ResidencyStatus | "">("");
  const [availableDays, setAvailableDays] = useState<AvailableDays | "">("");

  const [placement, setPlacement] = useState("");
  const [sizeWcm, setSizeWcm] = useState("");
  const [sizeHcm, setSizeHcm] = useState("");
  const [colorPref, setColorPref] = useState<ColorPreference>("");
  const [designDesc, setDesignDesc] = useState("");

  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const requiredComplete = useMemo(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    return (
      name.trim().length > 0 &&
      isEmailValid &&
      phone.trim().length > 0 &&
      genre !== "" &&
      residency !== "" &&
      availableDays !== "" &&
      designDesc.trim().length > 0 &&
      ageConfirmed
    );
  }, [ageConfirmed, availableDays, designDesc, email, genre, name, phone, residency]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // UI only for now
  };

  return (
    <form className="booking-form" onSubmit={onSubmit} aria-labelledby={`${formId}-title`}>
      <div className="booking-form__header">
        <h3 id={`${formId}-title`} className="booking-form__title">
          CONTACT US
        </h3>
      </div>

      <div className="booking-form__grid" role="group" aria-label="Booking request form">
        <div className="booking-form__col booking-form__col--left">
          <div className="booking-form__field">
            <label className="booking-form__label" htmlFor={`${formId}-name`}>
              Name <span className="booking-form__required">*</span>
            </label>
            <input
              id={`${formId}-name`}
              className="booking-form__input"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>

          <div className="booking-form__field">
            <label className="booking-form__label" htmlFor={`${formId}-email`}>
              E-mail <span className="booking-form__required">*</span>
            </label>
            <input
              id={`${formId}-email`}
              className="booking-form__input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="booking-form__field">
            <label className="booking-form__label" htmlFor={`${formId}-phone`}>
              Phone <span className="booking-form__required">*</span>
            </label>
            <input
              id={`${formId}-phone`}
              className="booking-form__input"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              autoComplete="tel"
            />
          </div>

          <fieldset className="booking-form__fieldset">
            <legend className="booking-form__legend">
              Genre <span className="booking-form__required">*</span>
            </legend>
            <div className="booking-form__options booking-form__options--twoCol">
              {GENRES.map((g) => (
                <label key={g.value} className="booking-form__option">
                  <input
                    className="booking-form__radio"
                    type="radio"
                    name="genre"
                    value={g.value}
                    checked={genre === g.value}
                    onChange={() => setGenre(g.value)}
                    required
                  />
                  <span className="booking-form__optionText">{g.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="booking-form__fieldset">
            <legend className="booking-form__legend">
              Residency Status <span className="booking-form__required">*</span>
            </legend>
            <div className="booking-form__options booking-form__options--stack">
              {RESIDENCY.map((r) => (
                <div key={r.value} className="booking-form__optionBlock">
                  <label className="booking-form__option">
                    <input
                      className="booking-form__radio"
                      type="radio"
                      name="residency"
                      value={r.value}
                      checked={residency === r.value}
                      onChange={() => setResidency(r.value)}
                      required
                    />
                    <span className="booking-form__optionText">{r.label}</span>
                  </label>
                  <p className="booking-form__help">{r.help}</p>
                </div>
              ))}
            </div>
          </fieldset>

          <fieldset className="booking-form__fieldset">
            <legend className="booking-form__legend">
              Available Days <span className="booking-form__required">*</span>
            </legend>
            <div className="booking-form__options booking-form__options--inline">
              {DAYS.map((d) => (
                <label key={d.value} className="booking-form__option">
                  <input
                    className="booking-form__radio"
                    type="radio"
                    name="availableDays"
                    value={d.value}
                    checked={availableDays === d.value}
                    onChange={() => setAvailableDays(d.value)}
                    required
                  />
                  <span className="booking-form__optionText">{d.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="booking-form__divider" aria-hidden="true" />

        <div className="booking-form__col booking-form__col--right">
          <div className="booking-form__field">
            <label className="booking-form__label" htmlFor={`${formId}-placement`}>
              Placement
            </label>
            <input
              id={`${formId}-placement`}
              className="booking-form__input"
              type="text"
              name="placement"
              value={placement}
              onChange={(e) => setPlacement(e.target.value)}
            />
          </div>

          <div className="booking-form__field">
            <div className="booking-form__labelRow">
              <span className="booking-form__label">Size Estimate</span>
              <span className="booking-form__meta">W cm / H cm</span>
            </div>
            <div className="booking-form__sizeRow">
              <label className="booking-form__srOnly" htmlFor={`${formId}-size-w`}>
                Width in centimeters
              </label>
              <input
                id={`${formId}-size-w`}
                className="booking-form__input booking-form__input--compact"
                type="text"
                inputMode="decimal"
                name="sizeWcm"
                value={sizeWcm}
                onChange={(e) => setSizeWcm(e.target.value)}
                placeholder="W"
              />
              <span className="booking-form__sizeSep">/</span>
              <label className="booking-form__srOnly" htmlFor={`${formId}-size-h`}>
                Height in centimeters
              </label>
              <input
                id={`${formId}-size-h`}
                className="booking-form__input booking-form__input--compact"
                type="text"
                inputMode="decimal"
                name="sizeHcm"
                value={sizeHcm}
                onChange={(e) => setSizeHcm(e.target.value)}
                placeholder="H"
              />
            </div>
          </div>

          <fieldset className="booking-form__fieldset">
            <legend className="booking-form__legend">Color</legend>
            <div className="booking-form__options booking-form__options--inline">
              <label className="booking-form__option">
                <input
                  className="booking-form__radio"
                  type="radio"
                  name="colorPref"
                  value="color"
                  checked={colorPref === "color"}
                  onChange={() => setColorPref("color")}
                />
                <span className="booking-form__optionText">Color</span>
              </label>
              <label className="booking-form__option">
                <input
                  className="booking-form__radio"
                  type="radio"
                  name="colorPref"
                  value="noColor"
                  checked={colorPref === "noColor"}
                  onChange={() => setColorPref("noColor")}
                />
                <span className="booking-form__optionText">No Color</span>
              </label>
            </div>
          </fieldset>

          <div className="booking-form__field">
            <label className="booking-form__label" htmlFor={`${formId}-design`}>
              Design Description <span className="booking-form__required">*</span>
            </label>
            <textarea
              id={`${formId}-design`}
              className="booking-form__textarea"
              name="designDesc"
              value={designDesc}
              onChange={(e) => setDesignDesc(e.target.value)}
              required
              rows={8}
              placeholder={
                "Please describe your design idea in detail.\n디자인에 대해 자세히 적어주세요."
              }
            />
          </div>
        </div>
      </div>

      <div className="booking-form__bottom">
        <label className="booking-form__check">
          <input
            className="booking-form__checkbox"
            type="checkbox"
            checked={ageConfirmed}
            onChange={(e) => setAgeConfirmed(e.target.checked)}
            required
            name="ageConfirmed"
          />
          <span className="booking-form__checkText">
            I am at least nineteen (19) years old in international age{" "}
            <span className="booking-form__required">*</span>
          </span>
        </label>

        <label className="booking-form__check">
          <input
            className="booking-form__checkbox"
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            name="newsletter"
          />
          <span className="booking-form__checkText">I would like to receive your newsletter</span>
        </label>

        <button
          type="submit"
          className="booking-form__submit"
          disabled={!requiredComplete}
          aria-disabled={!requiredComplete}
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default BookingForm;

