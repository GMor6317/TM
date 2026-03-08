import { useState } from "react";

const EVENTS = [
  { id: 1, name: "Back to Tec", month: 1, category: "estudiantil", alcance: "+1,000", inversion: "$10,000 MXN", desc: "Reúne a más de 1,000 estudiantes de distintas carreras con visibilidad de marca." },
  { id: 2, name: "Ventas en el Tec", month: 1, day: 14, category: "estudiantil", alcance: "+10,000", inversion: "$10,000 MXN", desc: "Presencia en el campus en fechas clave: 14 Feb · 15 Sep · 31 Oct." },
  { id: 3, name: "Women in STEM", month: 2, category: "estudiantil", alcance: "+1,000 (presencial y virtual)", inversion: "A convenir", desc: "Evento híbrido con transmisión en YouTube enfocado en mujeres en ciencia y tecnología." },
  { id: 4, name: "La Gala Internacional", month: 2, category: "cultural", alcance: "+20,000", inversion: "$10,000 MXN", desc: "Exhibición de automovilismo clásico en Huixquilucan. Stand 5×5 m en zona premium." },
  { id: 5, name: "Expo Ingeniería", month: 2, day: 24, dayEnd: 28, category: "estudiantil", alcance: "+10,000", inversion: "$10,000 MXN", desc: "Innovación y emprendimiento vinculando la Escuela de Ingeniería con la industria." },
  { id: 6, name: "Concurso de Elegancia", month: 3, category: "cultural", alcance: "+25,000", inversion: "$10,000 MXN", desc: "Evento de cultura automotriz clásica. Stand de cobranding con el patrocinador." },
  { id: 7, name: "Charreada", month: 4, day: 16, category: "cultural", alcance: "+2,000", inversion: "$10,000 MXN", desc: "Evento tradicional mexicano en Tepotzotlán combinando deporte, cultura y entretenimiento." },
  { id: 8, name: "Summer Camp", month: 6, category: "tentativo", alcance: "+50 niños", inversion: "A convenir", desc: "Curso STEM para niños en colaboración con el Tec de Monterrey. (Tentativo)" },
  { id: 9, name: "Gran Premio Histórico", month: 7, day: 10, category: "cultural", alcance: "+25,000", inversion: "$10,000 MXN", desc: "Carreras en el Autódromo Hermanos Rodríguez con audiencia apasionada por el automovilismo." },
  { id: 10, name: "Hi-Tec", month: 7, category: "estudiantil", alcance: "+1,000", inversion: "$10,000 MXN", desc: "Dirigido a estudiantes de ingeniería y negocios para mostrar la industria automotriz." },
  { id: 11, name: "Reclutamiento de Equipo", month: 7, category: "estudiantil", alcance: "+160 est.", inversion: "$10,000 MXN", desc: "Reclutamiento en CEM, CSF y CCM buscando perfiles técnicos y de liderazgo." },
  { id: 12, name: "Ventas en el Tec", month: 8, day: 15, category: "estudiantil", alcance: "+10,000", inversion: "$10,000 MXN", desc: "Presencia en el campus el 15 de septiembre." },
  { id: 13, name: "Ventas en el Tec", month: 9, day: 31, category: "estudiantil", alcance: "+10,000", inversion: "$10,000 MXN", desc: "Presencia en el campus el 31 de octubre." },
  { id: 14, name: "Winter Camp", month: 11, category: "tentativo", alcance: "+50 niños", inversion: "A convenir", desc: "Curso STEM para niños en diciembre. (Tentativo)" },
  { id: 15, name: "Watch Parties", month: 0, category: "cultural", alcance: "+90 por evento", inversion: "$10,000 MXN", desc: "F1, NFL, Champions League, Mundial 2026. Con alimentos y dinámicas con premios." },
  { id: 16, name: "Stands / Activación", month: 0, category: "estudiantil", alcance: "CEM +15,000 / CSF +3,000", inversion: "$10,000 MXN", desc: "Stands 3×3 m para activaciones en CEM o CSF. Enero–Junio 2026." },
  { id: 17, name: "Pláticas / Conferencias", month: 0, category: "estudiantil", alcance: "CEM +10,000 / CSF +3,000", inversion: "$10,000 MXN", desc: "Espacios de conferencia en CEM y CSF. Fechas a definir por el patrocinador." },
  { id: 18, name: "Visita Corporativa", month: 0, category: "corporativo", alcance: "Empleados del patrocinador", inversion: "$10,000 MXN", desc: "TM Racing visita la empresa para presentar proyectos, logros y sinergias." },
  { id: 19, name: "Karts", month: 0, category: "tentativo", alcance: "+100 personas", inversion: "$5,000 MXN", desc: "Evento exclusivo con creadores de contenido y pilotos mexicanos. (Tentativo)" },
];

const MONTHS = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

const ROSA = "#E0007A";
const ROSA_LIGHT = "#FFE6F3";
const AZUL = "#1565C0";

const CATEGORIES = {
  estudiantil: { label: "Estudiantil", color: AZUL, light: "#E3F0FF" },
  cultural: { label: "Cultural / Familiar", color: ROSA, light: ROSA_LIGHT },
  corporativo: { label: "Corporativo", color: "#182B4A", light: "#E8EEF8" },
  tentativo: { label: "Tentativo", color: "#7A8A9A", light: "#F0F0F5" },
};

export default function TmRacingCalendar() {
  const [selected, setSelected] = useState(null);
  const [filterCat, setFilterCat] = useState("all");

  const fixedEvents = EVENTS.filter(e => e.month > 0 && (filterCat === "all" || e.category === filterCat));
  const floatingEvents = EVENTS.filter(e => e.month === 0 && (filterCat === "all" || e.category === filterCat));

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#F4F7FF",
      minHeight: "100vh",
      color: "#182B4A",
      padding: "0 0 60px 0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #182B4A 0%, #1565C0 70%, #E0007A 100%)",
        padding: "40px 40px 30px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -40, right: -40,
          width: 220, height: 220, borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
        }}/>
        <div style={{
          position: "absolute", bottom: -60, right: 80,
          width: 140, height: 140, borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
        }}/>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, position: "relative" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#90CAF9", textTransform: "uppercase", marginBottom: 6 }}>
              Tecnológico de Monterrey
            </div>
            <div style={{ fontSize: 36, fontWeight: "bold", color: "#fff", lineHeight: 1 }}>
              TM <span style={{ color: "#FF6EC7" }}>Racing</span>
            </div>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 6, letterSpacing: 1 }}>
              Calendario de Eventos · Temporada 2026–2027
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
          <FilterBtn active={filterCat === "all"} onClick={() => setFilterCat("all")} color="#fff">Todos</FilterBtn>
          {Object.entries(CATEGORIES).map(([k, v]) => (
            <FilterBtn key={k} active={filterCat === k} onClick={() => setFilterCat(k)} color={v.color} light={v.light}>
              {v.label}
            </FilterBtn>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>

        {/* Monthly Grid */}
        <div style={{ marginTop: 36 }}>
          <SectionTitle>Eventos por Mes · 2026</SectionTitle>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}>
            {MONTHS.map((m, i) => {
              const monthEvts = fixedEvents.filter(e => e.month === i + 1);
              return (
                <div key={i} style={{
                  background: "#fff",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: monthEvts.length ? "0 2px 12px rgba(21,101,192,0.10)" : "0 1px 4px rgba(0,0,0,0.06)",
                  border: monthEvts.length ? "1.5px solid #BBDEFB" : "1.5px solid #E8EEF8",
                  opacity: monthEvts.length === 0 ? 0.55 : 1,
                }}>
                  <div style={{
                    background: monthEvts.length ? "linear-gradient(90deg,#1565C0,#E0007A)" : "#E8EEF8",
                    padding: "10px 14px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <span style={{ color: monthEvts.length ? "#fff" : "#9DAABF", fontWeight: "bold", fontSize: 14 }}>{m}</span>
                    {monthEvts.length > 0 && (
                      <span style={{
                        background: "rgba(255,255,255,0.25)", color: "#fff",
                        borderRadius: 20, fontSize: 11, padding: "2px 8px", fontFamily: "monospace",
                      }}>{monthEvts.length} evento{monthEvts.length > 1 ? "s" : ""}</span>
                    )}
                  </div>
                  <div style={{ padding: "10px 12px", minHeight: 60 }}>
                    {monthEvts.length === 0
                      ? <span style={{ color: "#B0BECE", fontSize: 12 }}>Sin eventos programados</span>
                      : monthEvts.map(ev => (
                        <EventChip key={ev.id} ev={ev} onClick={() => setSelected(ev)} />
                      ))
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Events */}
        {floatingEvents.length > 0 && (
          <div style={{ marginTop: 40 }}>
            <SectionTitle>Eventos con Fecha Flexible</SectionTitle>
            <p style={{ color: "#6A7A90", fontSize: 13, marginTop: 4, marginBottom: 16 }}>
              Fechas a definir o con presencia continua durante la temporada
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {floatingEvents.map(ev => (
                <div key={ev.id} onClick={() => setSelected(ev)} style={{
                  background: "#fff",
                  border: `1.5px solid ${CATEGORIES[ev.category].color}33`,
                  borderLeft: `4px solid ${CATEGORIES[ev.category].color}`,
                  borderRadius: 10,
                  padding: "12px 14px",
                  cursor: "pointer",
                  transition: "box-shadow 0.2s",
                }}>
                  <div style={{ fontSize: 13, fontWeight: "bold", color: "#182B4A" }}>{ev.name}</div>
                  <div style={{ fontSize: 11, color: "#9DAABF", marginTop: 3 }}>Fecha flexible · {CATEGORIES[ev.category].label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline strip */}
        <div style={{ marginTop: 48 }}>
          <SectionTitle>Vista de Línea de Tiempo</SectionTitle>
          <div style={{
            marginTop: 20, background: "#fff", borderRadius: 16,
            boxShadow: "0 2px 16px rgba(21,101,192,0.08)", padding: "24px 20px",
            overflowX: "auto",
          }}>
            <div style={{ display: "flex", minWidth: 900 }}>
              {MONTHS.map((m, i) => {
                const monthEvts = fixedEvents.filter(e => e.month === i + 1);
                return (
                  <div key={i} style={{ flex: 1, minWidth: 70 }}>
                    <div style={{
                      textAlign: "center", fontSize: 10, fontWeight: "bold",
                      color: monthEvts.length ? "#1565C0" : "#B0BECE",
                      letterSpacing: 1, textTransform: "uppercase",
                      paddingBottom: 6, borderBottom: `2px solid ${monthEvts.length ? "#1565C0" : "#E8EEF8"}`,
                      marginRight: 2,
                    }}>{m.slice(0,3)}</div>
                    <div style={{ paddingTop: 8, paddingRight: 4 }}>
                      {monthEvts.map(ev => (
                        <div key={ev.id} onClick={() => setSelected(ev)} style={{
                          background: CATEGORIES[ev.category].color,
                          color: "#fff", fontSize: 9, borderRadius: 4,
                          padding: "3px 5px", marginBottom: 3, cursor: "pointer",
                          overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis",
                          lineHeight: 1.3,
                        }} title={ev.name}>{ev.name}</div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: "fixed", inset: 0, background: "rgba(10,20,50,0.55)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 100, padding: 20,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: "#fff", borderRadius: 20, maxWidth: 440, width: "100%",
            boxShadow: "0 20px 60px rgba(21,101,192,0.25)",
            overflow: "hidden",
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${CATEGORIES[selected.category].color}, #182B4A)`,
              padding: "24px 28px 20px",
            }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "rgba(255,255,255,0.65)", textTransform: "uppercase" }}>
                {CATEGORIES[selected.category].label}
              </div>
              <div style={{ fontSize: 22, fontWeight: "bold", color: "#fff", marginTop: 4 }}>{selected.name}</div>
              {selected.month > 0 && (
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>
                  {selected.day ? `${selected.day}${selected.dayEnd ? `–${selected.dayEnd}` : ""} de ` : ""}{MONTHS[selected.month - 1]} 2026
                </div>
              )}
            </div>
            <div style={{ padding: "20px 28px 24px" }}>
              <p style={{ color: "#444", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{selected.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
                <InfoBox label="👥 Alcance" value={selected.alcance} />
                <InfoBox label="💰 Inversión" value={selected.inversion} />
              </div>
              <button onClick={() => setSelected(null)} style={{
                marginTop: 20, width: "100%", padding: "12px",
                background: CATEGORIES[selected.category].color,
                color: "#fff", border: "none", borderRadius: 10,
                fontSize: 14, fontWeight: "bold", cursor: "pointer",
                letterSpacing: 0.5,
              }}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterBtn({ active, onClick, color, light, children }) {
  return (
    <button onClick={onClick} style={{
      padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
      border: `1.5px solid ${active ? "#fff" : "rgba(255,255,255,0.3)"}`,
      background: active ? "rgba(255,255,255,0.2)" : "transparent",
      color: "#fff", fontWeight: active ? "bold" : "normal",
      transition: "all 0.15s",
    }}>{children}</button>
  );
}

function EventChip({ ev, onClick }) {
  const cat = CATEGORIES[ev.category];
  return (
    <div onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 7,
      padding: "5px 8px", borderRadius: 7, marginBottom: 5,
      background: cat.light, cursor: "pointer",
      border: `1px solid ${cat.color}22`,
      transition: "box-shadow 0.15s",
    }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: cat.color, flexShrink: 0 }}/>
      <span style={{ fontSize: 12, color: "#182B4A", fontWeight: 500, lineHeight: 1.3 }}>{ev.name}</span>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: 17, fontWeight: "bold", color: "#182B4A",
      margin: 0, paddingBottom: 6,
      borderBottom: "2px solid #E0007A",
      display: "inline-block",
    }}>{children}</h2>
  );
}

function InfoBox({ label, value }) {
  return (
    <div style={{
      background: "#FFF0F8", borderRadius: 10, padding: "10px 14px",
      border: "1px solid #F8C0DF",
    }}>
      <div style={{ fontSize: 11, color: "#B05080", marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: "bold", color: "#182B4A" }}>{value}</div>
    </div>
  );
}