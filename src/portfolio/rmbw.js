import React from "react";
import rmbw from "../images/Restore_Logo_Final trimmed.png";
import $ from "jquery";
var jQuery = require("jquery");

$(function () {
  $(".material-card > .mc-btn-action").on('click',function () {
    var card = $(this).parent(".material-card");
    var icon = $(this).children("i");
    icon.addClass("fa-spin-fast");

    if (card.hasClass("mc-active")) {
      card.removeClass("mc-active");

      window.setTimeout(function () {
        icon
          .removeClass("fa-arrow-left")
          .removeClass("fa-spin-fast")
          .addClass("fa-bars");
      }, 800);
    } else {
      card.addClass("mc-active");

      window.setTimeout(function () {
        icon
          .removeClass("fa-bars")
          .removeClass("fa-spin-fast")
          .addClass("fa-arrow-left");
      }, 800);
    }
  });
});

(function ($) {
  var MaterialCard = function (element, options) {
    this.options = options;
    this.card = $(element);
    this.button = $(element).children(".mc-btn-action");
    this.icon = $(element).children(".mc-btn-action").children("i");
    this.card_activator = options.card_activator;
    this.timing = this.getTransitionTiming();

    var that = this;

    if (that.card_activator === "click") {
      if (!this.icon.hasClass(this.options.icon_open)) {
        this.icon
          .attr("class", this.icon.attr("class").replace(/\bfa-.*\b/g, ""))
          .addClass(this.options.icon_open);
      }
      this.button.on("click", function () {
        that.toggle();
      });
    } else {
      this.button.hide();
    }

    if (that.card_activator === "hover") {
      this.card.on("mouseenter", function () {
        that.open();
      });
      this.card.on("mouseleave", function () {
        that.close();
      });
    }
  };

  MaterialCard.defaults = {
    icon_close: "fa-arrow-left",
    icon_open: "fa-bars",
    icon_spin: "fa-spin-fast",
    card_activator: "click",
  };

  MaterialCard.prototype.toggle = function () {
    this.icon.addClass(this.options.icon_spin);
    return this.isOpen() ? this.close() : this.open();
  };

  MaterialCard.prototype.getTransitionTiming = function () {
    var duration = 0;
    this.card.find("*").each(function () {
      if (
        transitionDurationToMilliseconds($(this).css("transition-duration")) +
          transitionDurationToMilliseconds($(this).css("transition-delay")) >
        duration
      ) {
        duration =
          transitionDurationToMilliseconds($(this).css("transition-duration")) +
          transitionDurationToMilliseconds($(this).css("transition-delay"));
      }
    });
    return duration;
  };

  MaterialCard.prototype.close = function () {
    var that = this;
    this.card.trigger("hide.material-card");
    this.card.removeClass("mc-active");
    window.setTimeout(function () {
      that.icon
        .removeClass(that.options.icon_spin)
        .removeClass(that.options.icon_close)
        .addClass(that.options.icon_open);

      that.card.trigger("hidden.material-card");
    }, this.timing);
  };

  MaterialCard.prototype.open = function () {
    var that = this;
    this.card.trigger("show.material-card");
    this.card.addClass("mc-active");

    window.setTimeout(function () {
      that.icon
        .removeClass(that.options.icon_spin)
        .removeClass(that.options.icon_open)
        .addClass(that.options.icon_close);

      that.card.trigger("shown.material-card");
    }, this.timing);
  };

  MaterialCard.prototype.isOpen = function () {
    return this.card.hasClass("mc-active");
  };

  var transitionDurationToMilliseconds = function (duration) {
    var pieces = duration.match(/^([d.]+)(w+)$/),
      time,
      unit,
      multiplier;

    if (pieces.length <= 1) {
      return duration;
    }
    time = pieces[1];
    unit = pieces[2];
    switch (unit) {
      case "ms":
        multiplier = 1;
        break;
      case "s":
        multiplier = 1000;
        break;
      default:
        // do nothing
        console.log('nothing');
    }
    return time * multiplier;
  };

  var Plugin = function (options) {
    return this.each(function () {
      var $this = $(this);
      var $MCData = $this.data("material-card");
      var $options = $.extend(
        {},
        MaterialCard.defaults,
        typeof options == "object" && options
      );

      if (!$MCData) {
        $this.data(
          "material-card",
          ($MCData = new MaterialCard(this, $options))
        );
      }

      if (typeof options == "string") {
        $MCData[options]();
      }
    });
  };

  $.fn.materialCard = Plugin;
})(jQuery);

export default class RMBW extends React.Component {
  render() {
    return (
      <>
        {/* <div className="card" id="rmbw">
          <div className="card-body">
            <h5 className="card-title">
              <a
                href="https://www.restoremassageandbodywork.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Restore Massage and Bodywork
              </a>
            </h5>
            <img
              className="card-img-top"
              src={rmbw}
              alt="Restore Massage and Bodywork"
            />
            <p className="card-text">Website for Massage Therapist Business</p>
          </div>
          <ul>
            <span className="badge badge-pill badge-primary">HTML</span>
            <span className="badge badge-pill badge-secondary">CSS</span>
            <span className="badge badge-pill badge-success">JavaScript</span>
            <span className="badge badge-pill badge-dark">REACT</span>
          </ul>

          <div className="card-body">
            <a
              href="https://github.com/deannapi/restoremassage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div> */}

        <div className="col-md-4 col-sm-6 col-xs-12">
          <article className="material-card Cyan">
            <h2>
              <span>Restore Massage and Bodywork</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={rmbw}
                  alt=""
                  // style={{ width: "15em" }}
                />
              </div>
              <div className="mc-description">
                Website for Massage Therapist Business
                <ul>
                  <span className="badge badge-pill badge-primary">HTML</span>
                  <span className="badge badge-pill badge-secondary">CSS</span>
                  <span className="badge badge-pill badge-success">
                    JavaScript
                  </span>
                  <span className="badge badge-pill badge-dark">REACT</span>
                </ul>
              </div>
            </div>
            <button className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </button>
            <div className="mc-footer">
              <a
                href="https://github.com/deannapi/restoremassage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.restoremassageandbodywork.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </article>
        </div>
      </>
    );
  }
}
