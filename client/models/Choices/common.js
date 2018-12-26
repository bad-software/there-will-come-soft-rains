import { oneLine } from 'common-tags'

// Economy | Population | Stability | Progress

export const common = [
  {
    text: oneLine`
      A recent study published in <i>Science</i> claims that CO<sub>2</sub>
      emissions<br>
      are directly involved in rising temperatures.`,
    A: {
      text: oneLine`
        Bury it and fund a new study with more
        <span class="hint industry line">favorable results.</span>
        `,
      stats: { stability: -10, economy: 10, industry: 15 }
    },
    B: {
      text: oneLine`
        Pass legislation to 
        <span class="hint progress">reduce carbon emissions</span> 
        across the board with a combination of 
        <span class="hint economy line">tax credits</span>
        and reduced 
        <span class="hint industry line">industrial output.</span>`,
      stats: { economy: -15, industry: -10, progress: 15 }
    }
  },
  {
    text: oneLine`
      A recent survey revealed that passenger vehicles account for over half
      of the total greenhouse gas emissions in the transportation sector,
      which itself accounts for
      <a 
        href="https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions#transportation" 
        target="_blank"
        rel="noopener noreferrer" 
      >
        almost one-third of total emissions
      </a>.`,
    A: {
      text: oneLine`
        Increase funding for
        <span class="hint industry line">public transportation</span>
        and incentivize use with 
        <span class="hint economy line">tax credits.</span>`,
      stats: { economy: -15, industry: 10, progress: 8 }
    },
    B: {
      text: oneLine`
        Raise fuel and carbon <span class="hint economy">taxes</span> in order 
        to reduce <span class="hint progress line">frivolous travel,</span>
        despite <span class="hint stability line">public concern.</span>`,
      stats: {
        economy: 10,
        stability: -20,
        industry: -10,
        progress: 15
      }
    }
  },
  {
    text: oneLine`
      Over half of our electricity comes from burning fossil fuels, 
      <a 
        href="https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions#electricity" 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        mostly coal and natural gas 
      </a>.`,
    A: {
      text: oneLine`
        Create new <span class="hint economy line">tax programs</span>
        for green energy initiatives both on the 
        <span class="hint industry">industrial</span> and 
        <span class="hint stability">consumer</span> level.`,
      stats: {
        economy: -15,
        stability: 10,
        industry: 10,
        progress: 10
      }
    },
    B: {
      text: oneLine`
        Reduce existing <span class="hint economy line">tax programs</span> 
        for the <span class="hint industry">fossil fuel industry.</span>`,
      stats: { economy: 10, industry: -15, progress: 10 }
    }
  },
  {
    text: oneLine`
      A growing anti-nuclear advocacy group is demanding that plans for
      several new <span class="hint industry line">nuclear plants</span> 
      around the region are to be discarded.`,
    A: {
      text: `Tell them to take a hike.`,
      stats: { stability: -15, industry: 10, progress: 15 }
    },
    B: {
      text: oneLine`
        Acquiesce to their demands in order to stem growing 
        <span class="hint stability line">public unrest.</span>`,
      stats: { economy: -15, industry: -10, stability: 15 }
    }
  },

  {
    text: oneLine`
      You've been presented with a plan to reduce CO<sub>2</sub> emissions 
      with a process called
      <a 
        href="https://www.epa.gov/uic/class-vi-wells-used-geologic-sequestration-co2" 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        Carbon Capture Sequestration and Storage (CCS) 
      </a>, in which CO<sub>2</sub> released from industrial plants is 
      captured before it enters the atmosphere and then transferred
      to a long-term storage area, often underground.`,
    A: {
      text: oneLine`
        It will be <span class="hint economy">expensive,</span> 
        but it's for the best.`,
      stats: { economy: -25, progress: 20 }
    },
    B: {
      text: oneLine`
        It might not a viable long-term solution. 
        Let's take a rain-check on that.`,
      stats: { economy: 15 }
    }
  },
  {
    text: oneLine`
      A nationwide fuel-switching or electric vehicle mandate could 
      drastically cut back on annual greenhouse gas emissions emitted by the
      <span class="hint industry line">transportation sector.</span>`,
    A: {
      text:
        `Mandate that every car on the road is hybrid or electric by 2030.`,
      stats: { industry: -15, stability: -10, progress: 15 }
    },
    B: {
      text: oneLine`
        Begin phasing out diesel and offering 
        <span class="hint economy line">tax breaks</span> for alternative 
        biofuels such as those made from waste cooking oil and hemp.`,
      stats: { economy: -15, progress: 10 }
    }
  },
  {
    text: oneLine`
      Encouraging specific 
      <span class="hint stability line">consumer goods</span> to be produced 
      from within a certain distance of their point of consumption could help 
      to <span class="hint progress line">reduce emissions</span> caused by 
      the <span class="hint industry line">freight industry,</span> including 
      hydrofluorocarbon (HFCs) released from refrigerated transport.`,
    A: {
      text: oneLine`
        <span class="hint economy">Tax</span> the transport of 
        refrigerated goods produced more than 1200-1600 miles from 
        the point of consumption.`,
      stats: { economy: 10, industry: -10, progress: 10 }
    },
    B: {
      text: oneLine`
        Our planet is dying! 
        <span class="hint economy line">Heavily tax</span> all food items 
        and certain other classes of goods produced more than 1200-1600 
        miles from the point of consumption.`,
      stats: {
        economy: 20,
        industry: -20,
        stability: -20,
        progress: 25
      }
    }
  },
  {
    text: oneLine`
      The production of palm oil has skyrocketed due to global initiatives 
      to increase the amount of biofuel in use. While 
      <span class="hint progress">dependence on oil</span> has been reduced,
      we are now dealing with a major
      <a 
        href="https://www.nytimes.com/2018/11/20/magazine/palm-oil-borneo-climate-catastrophe.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        global deforestation crisis
      </a>
      as well as several other 
      <a 
        href="https://en.wikipedia.org/wiki/Social_and_environmental_impact_of_palm_oil"
        target="_blank"
        rel="noopener noreferrer"
      >
        far-reaching consequences.
      </a>`,
    A: {
      text: oneLine`
        We need to reduce importation of palm oil as much as 80-90% by 2020, 
        no matter what.`,
      stats: {
        economy: -10,
        stability: -10,
        industry: -10,
        progress: 20
      }
    },
    B: {
      text: oneLine`
        Our <span class="hint economy">economy</span> just can't handle 
        such a <span class="hint stability line">drastic shift</span> back
        to traditional oil.`,
      stats: { economy: 15, industry: 10, stability: 10 }
    }
  },

  {
    text: oneLine`
      Your leading climate scientists have presented a plan to make a series 
      of upgrades to the infrastructure in your 
      <span class="hint industry line">industrial sector</span> which would 
      help <span class="hint progress">reduce energy requirements</span> 
      across the board.`,
    A: {
      text: oneLine`
        Who's <span class="hint economy">paying for that?</span><br/>
        Have you seen my bank statements lately?`,
      stats: { economy: 15, stability: 10 }
    },
    B: {
      text: oneLine`
        <span class="hint progress">Anything helps.</span><br/> 
        Let's at least enact <i>some</i> of these proposed changes.`,
      stats: { economy: -15, industry: 10, progress: 15 }
    }
  },
  {
    text: oneLine`
      Commonly used refrigerants like HCFC-22 and hydrofluorocarbon blends
      <a 
        href="https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions#commercial-and-residential" 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        are rapidly depleting the ozone in the atmosphere
      </a>. Advancements in refrigeration technology could help food 
      retailers reduce refrigerant emissions.`,
    A: {
      text: oneLine`
        Enact new efficiency requirements for refrigeration in the 
        <span class="hint industry">food and agriculture sectors.</span>`,
      stats: { stability: -10, industry: -10, progress: 10 }
    },
    B: {
      text: oneLine`
        Provide <span class="hint economy">tax breaks</span> for companies 
        willing to upgrade their infrastructure.`,
      stats: { economy: -15, industry: 10, progress: 10 }
    }
  },
  {
    text: oneLine`
      Livestock produce methane (CH<sub>4</sub>) as part of their normal 
      digestive processes, and it accounts for almost
      <a 
        href="https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions#agriculture"
        target="_blank" 
        rel="noopener noreferrer" 
      >
        one-third of all emissions
      </a> from the Agriculture sector.`,
    A: {
      text: oneLine`
        <span class="hint economy">Fund initiatives</span> to capture CH<sub>4</sub> from manure decomposition
         for use in <span class="hint progress line">renewable energy production.</span>`,
      stats: { economy: -10, progress: 10 }
    },
    B: {
      text: oneLine`
        Go one step further and mandate the storage of some manure in 
        anaerobic containment areas to maximize CH4 production and then 
        capture the CH<sub>4</sub> to use as an 
        <span class="hint progress line">energy substitute</span>
        for fossil fuels.`,
      stats: { economy: -20, industry: - 10, progress: 20 }
    }
  },
  {
    text: oneLine`
      Over-application of nitrogen-based fertilizers can lead to 
      <span class="hint progress">higher N<sub>2</sub>O emissions</span>
      without enhancing crop production.`,
    A: {
      text: oneLine`
        <span class="hint economy">Increase taxes</span>
        for nitrogen-based fertilizers.`,
      stats: { economy: 10, stability: -10, progress: 5 }
    },
    B: {
      text: oneLine`
        <span class="hint industry">Mandate an upper limit</span> 
        of nitrogen-based products per acre.`,
      stats: { stability: -10, industry: -10, progress: 15 }
    }
  },

  {
    text: oneLine`
      In addition to driving the extinction of hundreds of undiscovered 
      species, deforestation has become a major component of climate change. 
      Besides providing <span class="hint progress line">fresh oxygen</span>
      for planet Earth via photosynthesis, forests act as 
      <span class="hint progress line">natural carbon sinks</span>, 
      and as they shrink stored carbon from felled trees is released back 
      into the atmosphere.`,
    A: {
      text: oneLine`
        Mandate that all government correspondence to be paperless. Despite
        an upfront investment cost, it should
        <span class="hint economy line">save money</span> in the long run.
        `,
      stats: { economy: 10, progress: 5 }
    },
    B: {
      text: oneLine`
        Mandate that all 
        <span class="hint industry">newspapers and business mail</span>
        make use of recycled paper products, and offer 
        <span class="hint economy line">tax breaks</span> 
        to offset the higher costs.`,
      stats: { economy: -10, industry: -10, progress: 15 }
    }
  },
  {
    text: oneLine`
      The burning of coal, natural gas, and oil for electricity and heat is 
      the 
      <a 
        href="https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data" 
        target="_blank" 
        rel="noopener noreferrer" 
      > 
        largest single source 
      </a> of global greenhouse gas emissions.`,
    A: {
      text: oneLine`
        Give <span class="hint economy line">tax breaks</span> to citizens
        who use renewable energy sources for electricity.`,
      stats: { economy: -15, stability: 5, progress: 10 }
    },
    B: {
      text: oneLine`
        <span class="hint economy">Increase taxes</span> for citizens who
        use nonrenewable energy sources in areas with accessible and 
        affordable renewable alternatives.`,
      stats: { economy: 10, stability: -10, progress: 10 }
    }
  }]


/*
export const usa = [
  [
    oneLine`
      
    `,
    [ oneLine`

    `, {  }],
    [ oneLine`

    `, {  }]],
]
*/
