/* @ds-bundle: {"format":4,"namespace":"MSenyDesignSystem_050f79","components":[{"name":"CtaBand","sourcePath":"components/content/CtaBand.jsx"},{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"LogoMarquee","sourcePath":"components/content/LogoMarquee.jsx"},{"name":"PillarIcon","sourcePath":"components/content/PillarIcon.jsx"},{"name":"ProcessCard","sourcePath":"components/content/ProcessCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"LinkLive","sourcePath":"components/core/LinkLive.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"OptionCard","sourcePath":"components/forms/OptionCard.jsx"},{"name":"SelectField","sourcePath":"components/forms/SelectField.jsx"},{"name":"StepProgress","sourcePath":"components/forms/StepProgress.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"}],"sourceHashes":{"components/content/CtaBand.jsx":"c4856cb73a64","components/content/FaqItem.jsx":"a01b25c31c40","components/content/LogoMarquee.jsx":"304c4a38af5d","components/content/PillarIcon.jsx":"129dbca8d58f","components/content/ProcessCard.jsx":"7100a6c1fdf5","components/core/Button.jsx":"595e803623cd","components/core/Eyebrow.jsx":"e1c8bee522f6","components/core/LinkLive.jsx":"1ca2bee5806d","components/core/Logo.jsx":"2c7f4fc5fac0","components/forms/OptionCard.jsx":"f54893f49c59","components/forms/SelectField.jsx":"8a544d9b9f03","components/forms/StepProgress.jsx":"0945ad72f7de","components/forms/TextField.jsx":"ab2b78952ffb","ui_kits/website/Contact.jsx":"4e65fd588a7a","ui_kits/website/Home.jsx":"276a4a540bd5","ui_kits/website/Shell.jsx":"9519b78ed1a0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MSenyDesignSystem_050f79 = window.MSenyDesignSystem_050f79 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/CtaBand.jsx
try { (() => {
/* Full-width lime conversion band. Centered "ceremonial" variant or split teaser variant. */
function CtaBand({
  title,
  sub,
  ctaLabel,
  ctaHref = '#',
  layout = 'center',
  onCta,
  style
}) {
  const btn = /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    onClick: onCta,
    className: "btn-ink",
    style: {
      fontSize: layout === 'center' ? '1.125rem' : '1rem'
    }
  }, ctaLabel, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
  if (layout === 'split') {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--color-accent)',
        color: 'var(--color-accent-ink)',
        padding: '3rem 2rem',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '72rem',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "display",
      style: {
        margin: 0,
        fontSize: 'clamp(1.9rem,4.2vw,3rem)'
      }
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0.5rem 0 0',
        fontWeight: 500,
        opacity: 0.8
      }
    }, sub)), btn));
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-accent)',
      color: 'var(--color-accent-ink)',
      padding: '5rem 2rem',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '56rem',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      margin: 0,
      fontSize: 'clamp(2.2rem,5.5vw,4rem)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1rem 0 0',
      fontSize: '1.125rem',
      fontWeight: 500,
      opacity: 0.8
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.25rem'
    }
  }, btn)));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqItem.jsx
try { (() => {
const {
  useState
} = React;
/* FAQ accordion row: details/summary with a rotating [+] chip. */
function FaqItem({
  q,
  a,
  defaultOpen = false
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("details", {
    open: open,
    onToggle: e => setOpen(e.currentTarget.open),
    style: {
      borderBottom: '1px solid var(--color-line)',
      padding: '0.5rem 0'
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      display: 'flex',
      cursor: 'pointer',
      listStyle: 'none',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      padding: '1rem 0',
      fontFamily: 'var(--font-display)',
      fontSize: '1.125rem',
      fontWeight: 600,
      transition: 'color 0.3s ease'
    }
  }, q, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      height: '1.75rem',
      width: '1.75rem',
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 999,
      color: 'var(--color-accent-deep)',
      background: open ? 'color-mix(in srgb, var(--color-accent-deep) 10%, transparent)' : 'transparent',
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'all 0.3s ease'
    }
  }, "+")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingBottom: '1.25rem',
      color: 'var(--color-muted)'
    }
  }, a));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/LogoMarquee.jsx
try { (() => {
/* Client-logo credibility marquee. White-stroke SVGs on ink, edge-faded, pauses on hover. */
function LogoMarquee({
  logos = [],
  label = 'Ya hemos trabajado con',
  speed = 28,
  style
}) {
  const loop = [...logos, ...logos];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--color-line-dark)',
      background: 'var(--color-ink)',
      color: 'var(--color-paper)',
      padding: '2rem 0',
      ...style
    },
    "aria-label": label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '72rem',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '2.5rem',
      padding: '0 2rem'
    }
  }, label && /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0,
      flexShrink: 0,
      color: 'color-mix(in srgb, var(--color-paper) 60%, transparent)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "marquee",
    style: {
      width: '100%',
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track",
    style: {
      alignItems: 'center',
      animationDuration: `${speed}s`
    }
  }, loop.map((logo, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      paddingRight: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo.src,
    alt: "",
    style: {
      height: 'auto',
      width: 'auto',
      maxHeight: `${2.75 * (logo.escala || 1)}rem`,
      maxWidth: '10rem',
      objectFit: 'contain',
      opacity: 0.72,
      transition: 'opacity 0.3s ease'
    }
  })))))));
}
Object.assign(__ds_scope, { LogoMarquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LogoMarquee.jsx", error: String((e && e.message) || e) }); }

// components/content/PillarIcon.jsx
try { (() => {
const P = {
  consultoria: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  })),
  formacion: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 10v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
  })),
  automatizacion: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "8",
    height: "8",
    x: "3",
    y: "3",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11v4a2 2 0 0 0 2 2h4"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "8",
    height: "8",
    x: "13",
    y: "13",
    rx: "2"
  })),
  software: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m7 11 2-2-2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 13h4"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2"
  }))
};
/* The four service icons — Lucide (ISC): compass, graduation-cap, workflow, square-terminal. Stroke 1.5, currentColor. */
function PillarIcon({
  name = 'consultoria',
  size = 44,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: size,
    height: size,
    style: {
      color: 'var(--color-accent-deep)',
      ...style
    },
    "aria-hidden": "true"
  }, P[name] || P.consultoria);
}
Object.assign(__ds_scope, { PillarIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PillarIcon.jsx", error: String((e && e.message) || e) }); }

// components/content/ProcessCard.jsx
try { (() => {
/* Process step card. Two states: pending (paper) and done (ink, lime title). Site fills the bar on scroll-in, then flips to done. */
function ProcessCard({
  num = '01',
  name,
  desc,
  done = true,
  fill,
  style
}) {
  const f = fill ?? (done ? 1 : 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "card-live",
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '1.5rem',
      border: `1px solid ${done ? 'var(--color-line-dark)' : 'var(--color-line)'}`,
      background: done ? 'var(--color-ink)' : 'var(--color-paper)',
      padding: '2rem',
      transition: 'background-color 0.7s ease,border-color 0.4s ease,transform 0.3s var(--ease-expo)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.12em',
      color: done ? 'color-mix(in srgb, var(--color-paper) 55%, transparent)' : 'color-mix(in srgb, var(--color-ink) 45%, transparent)',
      transition: 'color 0.7s ease'
    }
  }, num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      margin: '0.75rem 0 0',
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: done ? 'var(--color-accent)' : 'var(--color-ink)',
      transition: 'color 0.7s ease'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0.75rem 0 2rem',
      color: done ? 'var(--color-mist)' : 'var(--color-muted)',
      transition: 'color 0.7s ease'
    }
  }, desc), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      display: 'block',
      height: 2,
      width: '100%',
      overflow: 'hidden',
      borderRadius: 999,
      background: 'color-mix(in srgb, var(--color-ink) 10%, transparent)'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: `${f * 100}%`,
      background: done ? 'var(--color-accent)' : 'var(--color-accent-deep)',
      transition: 'width 0.6s var(--ease-expo), background-color 0.7s ease'
    }
  })));
}
Object.assign(__ds_scope, { ProcessCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProcessCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pill CTAs. accent = lime primary; ghost = 1px currentColor outline; ink = near-black (used ON lime bands). */
function Button({
  variant = 'accent',
  arrow = false,
  href,
  children,
  style,
  ...rest
}) {
  const cls = {
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    ink: 'btn-ink'
  }[variant] || 'btn-accent';
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    style: style
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/* Section label in Chivo Mono caps, wrapped in the brand's [ ] motif. */
function Eyebrow({
  on = 'light',
  brackets = true,
  children,
  style
}) {
  const cls = brackets ? on === 'dark' ? 'eyebrow brackets' : 'eyebrow brackets-ink' : 'eyebrow';
  const color = on === 'dark' ? 'color-mix(in srgb, var(--color-accent) 90%, transparent)' : on === 'muted' ? 'var(--color-mist)' : 'var(--color-accent-deep)';
  return /*#__PURE__*/React.createElement("p", {
    className: cls,
    style: {
      color,
      margin: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/LinkLive.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Text link with the brand's living underline (grows left→right on hover). */
function LinkLive({
  href = '#',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: "link-live",
    style: {
      fontWeight: 600,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { LinkLive });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LinkLive.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/* The wordmark: lime [m] + .seny in Bricolage bold. Never redraw — it is typed, not drawn. */
function Logo({
  subBrand,
  size = '1.35rem',
  on = 'dark',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      fontSize: size,
      lineHeight: 1,
      color: on === 'dark' ? 'var(--color-paper)' : 'var(--color-ink)',
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.28em',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)'
    }
  }, "[m]"), ".seny"), subBrand && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      lineHeight: 1,
      color: 'var(--color-accent)'
    }
  }, "/", subBrand));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionCard.jsx
try { (() => {
/* Selectable option card from the lead form: rounded-2xl, flips to ink when selected. */
function OptionCard({
  name,
  desc,
  selected = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": selected,
    onClick: onClick,
    style: {
      width: '100%',
      cursor: 'pointer',
      borderRadius: '1rem',
      border: `1px solid ${selected ? 'var(--color-ink)' : 'var(--color-line)'}`,
      background: selected ? 'var(--color-ink)' : 'rgba(255,255,255,0.4)',
      color: selected ? 'var(--color-paper)' : 'var(--color-ink)',
      padding: '1rem 1.25rem',
      textAlign: 'left',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      boxShadow: selected ? '0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1)' : 'none',
      transition: 'all 0.2s ease',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 600
    }
  }, name), desc && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2,
      fontSize: '0.9rem',
      color: selected ? 'var(--color-mist)' : 'var(--color-muted)'
    }
  }, desc));
}
Object.assign(__ds_scope, { OptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectField.jsx
try { (() => {
/* Labeled select with the same field skin as TextField. */
function SelectField({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: 500,
      ...style
    }
  }, label, /*#__PURE__*/React.createElement("select", {
    value: value ?? '',
    onChange: e => onChange && onChange(e.target.value),
    style: {
      marginTop: '0.5rem',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: '1rem',
      border: '1px solid var(--color-line)',
      background: 'rgba(255,255,255,0.4)',
      padding: '0.75rem 1rem',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      color: value ? 'var(--color-ink)' : 'var(--color-muted)',
      outline: 'none'
    }
  }, placeholder != null && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { SelectField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectField.jsx", error: String((e && e.message) || e) }); }

// components/forms/StepProgress.jsx
try { (() => {
/* Multi-step form progress: caps label + thin teal bar. */
function StepProgress({
  step = 1,
  total = 3,
  stepLabel = 'Paso',
  ofLabel = 'de',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '0.875rem',
      fontWeight: 600,
      letterSpacing: '0.025em',
      color: 'var(--color-muted)',
      textTransform: 'uppercase'
    }
  }, stepLabel, " ", step, " ", ofLabel, " ", total), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.5rem',
      height: 4,
      width: '100%',
      borderRadius: 999,
      background: 'var(--color-line)'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 999,
      background: 'var(--color-accent-deep)',
      width: `${step / total * 100}%`,
      transition: 'width 0.5s ease'
    }
  })));
}
Object.assign(__ds_scope, { StepProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/StepProgress.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldStyle = {
  marginTop: '0.5rem',
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: '1rem',
  border: '1px solid var(--color-line)',
  background: 'rgba(255,255,255,0.4)',
  padding: '0.75rem 1rem',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  color: 'var(--color-ink)',
  outline: 'none',
  transition: 'border-color 0.2s ease'
};
/* Text input / textarea with brand field styling. Focus = ink border. */
function TextField({
  label,
  optional = false,
  optionalLabel = 'opcional',
  multiline = false,
  rows = 4,
  value,
  onChange,
  placeholder,
  type = 'text',
  style
}) {
  const common = {
    style: fieldStyle,
    value,
    placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: e => e.target.style.borderColor = 'var(--color-ink)',
    onBlur: e => e.target.style.borderColor = 'var(--color-line)'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: 500,
      ...style
    }
  }, label, optional && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-muted)',
      fontWeight: 400
    }
  }, " (", optionalLabel, ")"), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, common, {
    style: {
      ...fieldStyle,
      resize: 'vertical'
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, common)));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const DS3 = window.MSenyDesignSystem_050f79;
const {
  Eyebrow,
  Button,
  StepProgress,
  OptionCard,
  TextField,
  SelectField,
  LinkLive
} = DS3;
const {
  useState
} = React;
const services = [{
  key: 'consultoria',
  name: 'Consultoría',
  desc: 'IA, diseño, UX/UI o 3D'
}, {
  key: 'formacion',
  name: 'Formación',
  desc: 'Para tu equipo o tu dirección'
}, {
  key: 'automatizacion',
  name: 'Automatizar procesos',
  desc: 'Quítate trabajo repetitivo de encima'
}, {
  key: 'software',
  name: 'Software a medida',
  desc: 'Una idea, una app, internalizar un servicio'
}, {
  key: 'sin_definir',
  name: 'Aún no lo sé',
  desc: 'Te ayudamos a aterrizarlo'
}];
const branches = {
  consultoria: {
    question: '¿Sobre qué área necesitas consultoría?',
    options: ['IA aplicada a la empresa', 'IA aplicada al diseño', 'IA aplicada al marketing', 'Diseño web, gráfico o UX/UI', 'Modelado 3D'],
    detail: '¿En qué punto estás?',
    placeholder: 'P. ej.: usamos ChatGPT a ratos, pero sin método ni casos claros…'
  },
  formacion: {
    question: '¿Para quién es la formación?',
    options: ['Para mi equipo', 'Para dirección / ejecutivos', 'Para ambos'],
    detail: '¿Qué queréis aprender o resolver?',
    placeholder: 'P. ej.: que el equipo de marketing use IA en su día a día…'
  },
  automatizacion: {
    question: '¿Qué te gustaría automatizar?',
    options: [],
    detail: 'Cuéntanoslo con tus palabras',
    placeholder: 'P. ej.: cada semana perdemos horas pasando pedidos del email al ERP…'
  },
  software: {
    question: '¿Cuál es tu situación?',
    options: ['Tengo una idea de programa / web / app', 'Pago un servicio recurrente que quiero internalizar', 'Todavía lo estoy explorando'],
    detail: 'Cuéntanos la idea o el servicio',
    placeholder: 'P. ej.: pagamos X al mes por una herramienta que solo usamos a medias…'
  },
  sin_definir: {
    question: 'Cuéntanos tu situación',
    options: [],
    detail: '¿Qué te trae por aquí?',
    placeholder: 'P. ej.: sé que la IA puede ayudarnos, pero no sé por dónde empezar…'
  }
};
const sizes = [{
  value: '1-10',
  label: '1-10 personas'
}, {
  value: '11-50',
  label: '11-50 personas'
}, {
  value: '51-250',
  label: '51-250 personas'
}, {
  value: '250+',
  label: 'Más de 250 personas'
}];
function Contact({
  go
}) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [service, setService] = useState(null);
  const [area, setArea] = useState(null);
  const [detail, setDetail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [size, setSize] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState(null);
  const branch = service ? branches[service] : null;
  const next = () => {
    if (step === 0 && !service) return setError('Elige una opción para continuar.');
    if (step === 1 && branch && branch.options.length > 0 && !area) return setError('Elige una opción para continuar.');
    setError(null);
    setStep(Math.min(step + 1, 2));
  };
  const submit = () => {
    if (!name.trim()) return setError('Nos falta tu nombre.');
    if (!email.trim()) return setError('Nos falta tu email.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Revisa el email — no parece válido.');
    if (!consent) return setError('Necesitamos tu consentimiento para poder responderte.');
    setError(null);
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--color-paper)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '48rem',
      margin: '0 auto',
      padding: '5rem 2rem 7rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Contacto"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      margin: '1.25rem 0 0',
      fontSize: 'clamp(2.6rem,7vw,4.5rem)'
    }
  }, "Cu\xE9ntanos tu caso."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.25rem 0 0',
      fontSize: '1.125rem',
      color: 'var(--color-muted)'
    }
  }, "Cuanto mejor entendamos qu\xE9 necesitas, mejor ser\xE1 la propuesta. Son dos minutos."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3rem'
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    className: "step-in",
    style: {
      padding: '2.5rem 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: '3.5rem',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-deep)'
    }
  }, "["), "Recibido.", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-deep)'
    }
  }, "]")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.5rem auto 0',
      maxWidth: '28rem',
      color: 'var(--color-muted)'
    }
  }, "Tu caso ya est\xE1 con nosotros. Te escribiremos en breve para agendar una primera conversaci\xF3n \u2014 sin compromiso."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    className: "link-live",
    style: {
      marginTop: '2rem',
      display: 'inline-block',
      fontWeight: 600
    }
  }, "Volver al inicio")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepProgress, {
    step: step + 1,
    total: 3
  }), step === 0 && /*#__PURE__*/React.createElement("fieldset", {
    className: "step-in",
    style: {
      border: 0,
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("legend", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      fontWeight: 600,
      padding: 0,
      marginTop: '1.75rem'
    }
  }, "\xBFQu\xE9 necesitas?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem',
      marginTop: '1.25rem'
    }
  }, services.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.key,
    name: o.name,
    desc: o.desc,
    selected: service === o.key,
    onClick: () => {
      setService(o.key);
      setArea(null);
      setError(null);
    }
  })))), step === 1 && branch && /*#__PURE__*/React.createElement("fieldset", {
    className: "step-in",
    style: {
      border: 0,
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("legend", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      fontWeight: 600,
      padding: 0,
      marginTop: '1.75rem'
    }
  }, "Un poco de contexto"), branch.options.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 0.75rem',
      fontWeight: 500
    }
  }, branch.question), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem'
    }
  }, branch.options.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o,
    name: o,
    selected: area === o,
    onClick: () => {
      setArea(o);
      setError(null);
    }
  })))), /*#__PURE__*/React.createElement(TextField, {
    label: branch.detail,
    multiline: true,
    placeholder: branch.placeholder,
    value: detail,
    onChange: setDetail,
    style: {
      marginTop: '1.25rem'
    }
  })), step === 2 && /*#__PURE__*/React.createElement("fieldset", {
    className: "step-in",
    style: {
      border: 0,
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("legend", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      fontWeight: 600,
      padding: 0,
      marginTop: '1.75rem'
    }
  }, "Tus datos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.875rem',
      marginTop: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Nombre",
    value: name,
    onChange: setName
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Empresa",
    optional: true,
    value: company,
    onChange: setCompany
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email",
    type: "email",
    value: email,
    onChange: setEmail
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Tel\xE9fono",
    optional: true,
    type: "tel",
    value: phone,
    onChange: setPhone
  })), /*#__PURE__*/React.createElement(SelectField, {
    label: "Tama\xF1o de empresa",
    placeholder: "Prefiero no decirlo",
    options: sizes,
    value: size,
    onChange: setSize,
    style: {
      marginTop: '0.875rem'
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: '0.625rem',
      alignItems: 'flex-start',
      marginTop: '1.25rem',
      fontSize: '0.95rem'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: consent,
    onChange: e => setConsent(e.target.checked),
    style: {
      marginTop: '0.2rem',
      accentColor: 'var(--color-accent-deep)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "He le\xEDdo y acepto la ", /*#__PURE__*/React.createElement(LinkLive, {
    href: "#",
    style: {
      fontWeight: 600
    }
  }, "pol\xEDtica de privacidad")))), error && /*#__PURE__*/React.createElement("p", {
    role: "alert",
    style: {
      margin: '1rem 0 0',
      fontWeight: 500,
      color: '#b3261e'
    }
  }, error), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '2rem'
    }
  }, step > 0 ? /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setError(null);
      setStep(step - 1);
    }
  }, "Atr\xE1s") : /*#__PURE__*/React.createElement("span", null), step < 2 ? /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: next
  }, "Siguiente") : /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: submit
  }, "Enviar mi caso"))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS2 = window.MSenyDesignSystem_050f79;
const {
  Eyebrow,
  Button,
  LinkLive,
  PillarIcon,
  ProcessCard,
  CtaBand,
  LogoMarquee
} = DS2;
const clientLogos = [{
  src: '../../assets/logos/el-vasco-logo-white.svg',
  nombre: 'El Vasco'
}, {
  src: '../../assets/logos/lottusse-logo-white.svg',
  nombre: 'Lottusse'
}, {
  src: '../../assets/logos/la-vasca-logo-white.svg',
  nombre: 'La Vasca'
}, {
  src: '../../assets/logos/sukalde-logo-white.svg',
  nombre: 'Sukalde'
}, {
  src: '../../assets/logos/la-vasca-mexicana-logo-white.svg',
  nombre: 'La Vasca Mexicana'
}, {
  src: '../../assets/logos/sua-logo-white.svg',
  nombre: 'Súa',
  escala: 1.35
}];
const pillars = [{
  key: 'consultoria',
  num: '01',
  name: 'Consultoría',
  tag: 'Criterio antes que herramientas.',
  desc: 'IA aplicada a tu negocio, a tu diseño y a tu marketing — y todo el diseño que lo acompaña.',
  bullets: ['IA aplicada a la empresa', 'IA aplicada al diseño', 'IA aplicada al marketing', 'Diseño web, gráfico y UX/UI', 'Modelado 3D']
}, {
  key: 'formacion',
  num: '02',
  name: 'Formación in-company',
  tag: 'Conocimiento que se queda en tu equipo.',
  desc: 'Formación en IA personalizada a tu empresa y a tus casos de uso reales — del equipo a la dirección.',
  bullets: ['Programas a medida de tus casos de uso', 'Sesiones introductorias para altos ejecutivos', 'IA aplicada a empresa, diseño y marketing']
}, {
  key: 'automatizacion',
  num: '03',
  name: 'Automatización con IA',
  tag: 'Menos tareas repetitivas, más negocio.',
  desc: 'Nos cuentas qué te gustaría automatizar y estudiamos tu caso: procesos a medida, integrados en tus herramientas.',
  bullets: ['Procesos administrativos y de datos', 'Flujos conectados a tus herramientas actuales', 'Estudio previo de tu caso, sin compromiso']
}, {
  key: 'software',
  num: '04',
  name: 'Software a medida',
  tag: 'Tu idea, convertida en producto.',
  desc: '¿Una idea de programa, web o app? ¿Un servicio recurrente que querrías internalizar y hacer tuyo? Lo estudiamos.',
  bullets: ['Webs, apps y herramientas internas', 'Internalización de servicios de terceros', 'De la idea al producto funcionando']
}];
const wrap = {
  maxWidth: '72rem',
  margin: '0 auto',
  padding: '0 2rem'
};
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      background: 'var(--color-ink)',
      color: 'var(--color-paper)',
      minHeight: '82vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "media-duotone",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 68% 30%, #45454c 0%, #1c1c20 55%, #101013 100%)',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, var(--color-ink), color-mix(in srgb,var(--color-ink) 80%,transparent), color-mix(in srgb,var(--color-ink) 65%,transparent))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      width: '100%',
      boxSizing: 'border-box',
      paddingTop: '6rem',
      paddingBottom: '4rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    on: "dark"
  }, "estudio de IA \xB7 dise\xF1o \xB7 software"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      margin: '1.5rem 0 0',
      maxWidth: '64rem',
      fontSize: 'clamp(2.35rem,8vw,6.75rem)'
    }
  }, "IA, dise\xF1o y software,", /*#__PURE__*/React.createElement("br", null), "aplicados ", /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'pre'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)'
    }
  }, "[m]"), ".seny")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1rem 0 0',
      fontSize: '0.875rem',
      fontWeight: 500,
      fontStyle: 'italic',
      color: 'color-mix(in srgb,var(--color-accent) 80%,transparent)'
    }
  }, "\xABseny\xBB: sensatez, criterio, juicio sereno \u2014 no es casualidad."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.5rem 0 0',
      maxWidth: '36rem',
      fontSize: '1.25rem',
      color: 'var(--color-mist)'
    }
  }, "No vendemos la herramienta de moda. Aplicamos la inteligencia artificial con criterio, donde de verdad importa: consultor\xEDa, formaci\xF3n in-company, automatizaci\xF3n de procesos y software a medida."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.5rem',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go('contacto'),
    style: {
      fontSize: '1.125rem'
    }
  }, "Cu\xE9ntanos tu caso"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => document.getElementById('pilares') && window.scrollTo({
      top: document.getElementById('pilares').offsetTop - 70,
      behavior: 'smooth'
    }),
    style: {
      color: 'color-mix(in srgb,var(--color-paper) 90%,transparent)'
    }
  }, "Ver servicios"))));
}
function Pillars() {
  return /*#__PURE__*/React.createElement("section", {
    id: "pilares",
    style: {
      background: 'var(--color-paper)',
      padding: '7rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Qu\xE9 hacemos"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      margin: '1rem 0 0',
      maxWidth: '48rem',
      fontSize: 'clamp(2.2rem,5.5vw,4.25rem)'
    }
  }, "Cuatro maneras de ayudarte."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.25rem 0 0',
      maxWidth: '36rem',
      fontSize: '1.125rem',
      color: 'var(--color-muted)'
    }
  }, "Entra por donde te duela m\xE1s. Todas acaban en lo mismo: tu caso, estudiado y resuelto."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4rem'
    }
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.key,
    href: "#",
    onClick: e => e.preventDefault(),
    className: "pillar-row",
    style: {
      display: 'grid',
      gridTemplateColumns: '5rem 1fr 1fr 3rem',
      alignItems: 'start',
      gap: '2rem',
      borderTop: '1px solid var(--color-line)',
      borderBottom: i === pillars.length - 1 ? '1px solid var(--color-line)' : 'none',
      padding: '2.5rem 1rem',
      color: 'inherit',
      transition: 'background-color 0.3s ease'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PillarIcon, {
    name: p.key,
    size: 56
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '0.75rem',
      fontFamily: 'var(--font-display)',
      fontSize: '1.125rem',
      fontWeight: 600,
      color: 'var(--color-accent-deep)'
    }
  }, p.num)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '-0.02em'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0.5rem 0 0',
      fontWeight: 500,
      color: 'color-mix(in srgb,var(--color-accent-ink) 80%,transparent)'
    }
  }, p.tag)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--color-muted)'
    }
  }, p.desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '1rem 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.375rem',
      fontSize: '0.95rem',
      color: 'color-mix(in srgb,var(--color-ink) 80%,transparent)'
    }
  }, p.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-deep)'
    },
    "aria-hidden": "true"
  }, "[\xB7]"), b))), /*#__PURE__*/React.createElement("span", {
    className: "link-live",
    style: {
      marginTop: '1.25rem',
      display: 'inline-block',
      fontWeight: 600
    }
  }, "Saber m\xE1s")), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '1.5rem',
      color: 'var(--color-muted)'
    }
  }, "\u2192"))))));
}
function Process() {
  const steps = [{
    num: '01',
    name: 'Contacto',
    desc: 'Rellenas el formulario en dos minutos: dónde estás y qué necesitas. Sin tecnicismos.'
  }, {
    num: '02',
    name: 'Plan',
    desc: 'Analizamos tu caso y te proponemos un plan claro: alcance, plazos y qué vas a conseguir.'
  }, {
    num: '03',
    name: 'Acción',
    desc: 'Construimos, formamos o automatizamos — contigo dentro. El conocimiento se queda en tu equipo.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-paper)',
      padding: '6rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      margin: '1rem 0 0',
      fontSize: 'clamp(2.2rem,5.5vw,4.25rem)'
    }
  }, "Simple, de principio a fin."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '1.5rem'
    }
  }, steps.map(s => /*#__PURE__*/React.createElement(ProcessCard, _extends({
    key: s.num
  }, s))))));
}
function Training({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      background: 'var(--color-paper)',
      padding: '7rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-30%',
      left: '-15%',
      height: '60vh',
      width: '60vh',
      borderRadius: '50%',
      opacity: 0.12,
      zIndex: -1,
      background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      alignItems: 'center',
      gap: '4rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Formaci\xF3n in-company"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      margin: '1.25rem 0 0',
      fontSize: 'clamp(2.2rem,5.5vw,4.25rem)'
    }
  }, "La IA no es de inform\xE1tica. Es de toda tu empresa."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.5rem 0 0',
      fontSize: '1.125rem',
      color: 'var(--color-muted)'
    }
  }, "Formamos a tu equipo en tu oficina y con tus casos de uso \u2014 no con diapositivas gen\xE9ricas. Y para la direcci\xF3n, sesiones ejecutivas que van al grano.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      borderTop: '1px solid var(--color-line)'
    }
  }, ['In situ, en tu empresa', 'Sobre tus casos de uso reales', 'De la introducción ejecutiva al taller práctico'].map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      borderBottom: '1px solid var(--color-line)',
      padding: '1rem 0',
      fontWeight: 500,
      color: 'color-mix(in srgb,var(--color-ink) 85%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-deep)'
    },
    "aria-hidden": "true"
  }, "[\u2713]"), p))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go('contacto'),
    style: {
      fontSize: '1.125rem'
    }
  }, "Dise\xF1a tu formaci\xF3n")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1.25rem',
      fontSize: '0.875rem',
      color: 'var(--color-muted)'
    }
  }, "\xBFNo sabes por d\xF3nde empezar? ", /*#__PURE__*/React.createElement(LinkLive, {
    href: "#",
    style: {
      color: 'var(--color-ink)'
    }
  }, "Haz el test \u2192")))));
}
function Manifesto() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      background: 'var(--color-ink)',
      color: 'var(--color-paper)',
      padding: '8rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "media-duotone",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 40% 45%, #3d3d44 0%, #17171a 65%)',
      opacity: 0.35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, var(--color-ink), color-mix(in srgb,var(--color-ink) 80%,transparent), color-mix(in srgb,var(--color-ink) 70%,transparent))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '56rem',
      margin: '0 auto',
      padding: '0 2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    on: "muted",
    brackets: false
  }, "Por qu\xE9 \"[m].seny\""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      margin: '2rem 0 0',
      fontSize: 'clamp(2.8rem,7.5vw,5.5rem)',
      fontWeight: 700,
      letterSpacing: '-0.025em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)'
    }
  }, "[m]"), ".seny"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '1.75rem 0 0',
      fontSize: '1.5rem',
      fontWeight: 500,
      color: 'var(--color-accent)'
    }
  }, "\xABSeny\xBB: sensatez, criterio, juicio sereno."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.5rem auto 0',
      maxWidth: '36rem',
      fontSize: '1.25rem',
      color: 'var(--color-mist)'
    }
  }, "Somos un estudio que aplica la tecnolog\xEDa con criterio. Sin modas y sin humo: casos de uso reales, resultados que se pueden medir y soluciones que son tuyas \u2014 no de la herramienta de moda.")));
}
function FinalCta({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-paper)',
      padding: '8rem 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '56rem',
      margin: '0 auto',
      padding: '0 2rem'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      margin: 0,
      fontSize: 'clamp(2.6rem,7vw,5.5rem)'
    }
  }, "\xBFHablamos de tu caso?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.5rem 0 0',
      fontSize: '1.25rem',
      color: 'var(--color-muted)'
    }
  }, "Dos minutos de formulario. Sin compromiso."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go('contacto'),
    style: {
      fontSize: '1.125rem'
    }
  }, "Empezar ahora"))));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(LogoMarquee, {
    logos: clientLogos
  }), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Training, {
    go: go
  }), /*#__PURE__*/React.createElement(CtaBand, {
    layout: "split",
    title: "\xBFCu\xE1nto no sabes sobre la IA?",
    sub: "7 preguntas, 2 minutos, sin email.",
    ctaLabel: "Hazte el test"
  }), /*#__PURE__*/React.createElement(Manifesto, null), /*#__PURE__*/React.createElement(FinalCta, {
    go: go
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const DS = window.MSenyDesignSystem_050f79;
const {
  Logo,
  Eyebrow,
  Button,
  LinkLive
} = DS;
function Navbar({
  page,
  go
}) {
  const links = [['consultoria', 'Consultoría'], ['formacion', 'Formación'], ['automatizacion', 'Automatización'], ['software', 'Software']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--color-ink)',
      boxShadow: '0 1px 0 var(--color-line-dark)',
      color: 'var(--color-paper)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: '72rem',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.375rem'
    }
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem'
    }
  }, links.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => e.preventDefault(),
    className: "link-live",
    style: {
      fontSize: '0.95rem',
      fontWeight: 500,
      color: 'color-mix(in srgb,var(--color-paper) 80%,transparent)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.375rem',
      fontSize: '0.85rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)'
    }
  }, "es"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'color-mix(in srgb,var(--color-paper) 25%,transparent)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'color-mix(in srgb,var(--color-paper) 60%,transparent)'
    }
  }, "ca"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'color-mix(in srgb,var(--color-paper) 25%,transparent)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'color-mix(in srgb,var(--color-paper) 60%,transparent)'
    }
  }, "en")), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contacto'),
    style: {
      padding: '0.625rem 1.25rem',
      fontSize: '0.95rem'
    }
  }, "Cu\xE9ntanos tu caso"))));
}
function Footer({
  go
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("h2", {
    className: "eyebrow",
    style: {
      margin: '0 0 1rem',
      color: 'color-mix(in srgb,var(--color-paper) 55%,transparent)'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.125rem',
      color: 'color-mix(in srgb,var(--color-paper) 80%,transparent)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (title === 'Contacto') go('contacto');
    },
    className: "link-live",
    style: {
      display: 'inline-block',
      padding: '0.5rem 0'
    }
  }, it)))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-ink)',
      color: 'var(--color-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '72rem',
      margin: '0 auto',
      padding: '4rem 2rem 2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '3rem',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: "1.875rem"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0.75rem 0 0',
      maxWidth: '20rem',
      color: 'color-mix(in srgb,var(--color-paper) 60%,transparent)'
    }
  }, "Estudio de IA, dise\xF1o y software.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(9rem,1fr))',
      gap: '2.5rem'
    }
  }, col('Servicios', ['Consultoría', 'Formación', 'Automatización', 'Software']), col('Contacto', ['Cuéntanos tu caso']), col('Legal', ['Aviso legal', 'Privacidad', 'Cookies']))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      borderTop: '1px solid var(--color-line-dark)',
      paddingTop: '1.5rem',
      fontSize: '0.875rem',
      color: 'color-mix(in srgb,var(--color-paper) 60%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\xA9 2026 [m].seny studio"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "msenystudio.com"))));
}
Object.assign(window, {
  Navbar,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.LogoMarquee = __ds_scope.LogoMarquee;

__ds_ns.PillarIcon = __ds_scope.PillarIcon;

__ds_ns.ProcessCard = __ds_scope.ProcessCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.LinkLive = __ds_scope.LinkLive;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.OptionCard = __ds_scope.OptionCard;

__ds_ns.SelectField = __ds_scope.SelectField;

__ds_ns.StepProgress = __ds_scope.StepProgress;

__ds_ns.TextField = __ds_scope.TextField;

})();
