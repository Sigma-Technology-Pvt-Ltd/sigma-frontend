import React from "react";
import styled from "styled-components";

// Outer Showcase Container
const ShowcaseContainer = styled.div`
  width: 100%;
  max-width: 540px;
  position: relative;
  margin: 0 auto;
  user-select: none;
`;

// Subtle ambient background accent plate mirroring the selected mockup
const BackgroundAccent = styled.div`
  position: absolute;
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
  background: radial-gradient(circle at 20% 20%, rgba(224, 242, 254, 0.5) 0%, rgba(240, 249, 255, 0.2) 65%, transparent 100%);
  border-radius: 44px;
  z-index: 0;
  pointer-events: none;
`;

// Asymmetric 2-Column Grid (Left ~44%, Right ~56%)
const GridWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.28fr;
  grid-template-rows: 220px 220px;
  gap: 16px;

  @media screen and (max-width: 991px) {
    grid-template-rows: 190px 190px;
    gap: 12px;
  }

  @media screen and (max-width: 576px) {
    grid-template-rows: 155px 155px;
    gap: 10px;
  }
`;

// Base Tile Card with smooth elevation and image zoom
const TileCard = styled.div`
  position: relative;
  overflow: hidden;
  background: #f1f5f9;
  box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.85);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 32px -4px rgba(37, 99, 235, 0.18), 0 6px 14px -2px rgba(0, 0, 0, 0.06);

    img {
      transform: scale(1.05);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

// 1. Top-Left: Signature large curved top-left corner (Fireplaces showcase)
const TopLeftCard = styled(TileCard)`
  border-radius: 64px 18px 18px 18px;

  @media screen and (max-width: 576px) {
    border-radius: 40px 12px 12px 12px;
  }
`;

// 2. Top-Right: Signature large curved top-right corner (Swimming Pool showcase)
const TopRightCard = styled(TileCard)`
  border-radius: 18px 64px 18px 18px;

  @media screen and (max-width: 576px) {
    border-radius: 12px 40px 12px 12px;
  }
`;

// 3. Bottom-Left: Signature large curved bottom-left corner (Innmotek Heat Pump)
const BottomLeftCard = styled(TileCard)`
  border-radius: 18px 18px 18px 64px;

  @media screen and (max-width: 576px) {
    border-radius: 12px 12px 12px 40px;
  }
`;

// 4. Bottom-Right: Signature large curved bottom-right corner (Outdoor Pizza Oven)
const BottomRightCard = styled(TileCard)`
  border-radius: 18px 18px 64px 18px;

  @media screen and (max-width: 576px) {
    border-radius: 12px 12px 40px 12px;
  }
`;

// Fallback high-quality preview visuals matching the client-approved mockup
const DEFAULT_PREVIEW_SLOTS = [
  {
    image: "/images/img/about/about_slot_1.webp",
    title: "Fireplaces & Indoor Heating",
  },
  {
    image: "/images/img/about/about_slot_2.webp",
    title: "Swimming Pool Solutions",
  },
  {
    image: "/images/img/about/about_slot_3.webp",
    title: "Innmotek Heat Pump Solutions",
  },
  {
    image: "/images/img/about/about_slot_4.webp",
    title: "Outdoor Pizza Oven & Living",
  },
];

const DiamondCluster = ({ clusterImages }) => {
  // Use uploaded slot image if available; otherwise show client mockup preview
  const getSlot = (index) => {
    const custom = clusterImages?.[index];
    const fallback = DEFAULT_PREVIEW_SLOTS[index];
    return {
      image: (custom && custom.image) ? custom.image : fallback.image,
      title: (custom && custom.title) ? custom.title : fallback.title,
    };
  };

  const slot0 = getSlot(0);
  const slot1 = getSlot(1);
  const slot2 = getSlot(2);
  const slot3 = getSlot(3);

  return (
    <ShowcaseContainer>
      <BackgroundAccent />
      <GridWrapper>
        {/* Slot 1: Top-Left Card */}
        <TopLeftCard title={slot0.title}>
          <img
            src={slot0.image}
            alt={slot0.title}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DEFAULT_PREVIEW_SLOTS[0].image;
            }}
          />
        </TopLeftCard>

        {/* Slot 2: Top-Right Card */}
        <TopRightCard title={slot1.title}>
          <img
            src={slot1.image}
            alt={slot1.title}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DEFAULT_PREVIEW_SLOTS[1].image;
            }}
          />
        </TopRightCard>

        {/* Slot 3: Bottom-Left Card */}
        <BottomLeftCard title={slot2.title}>
          <img
            src={slot2.image}
            alt={slot2.title}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DEFAULT_PREVIEW_SLOTS[2].image;
            }}
          />
        </BottomLeftCard>

        {/* Slot 4: Bottom-Right Card */}
        <BottomRightCard title={slot3.title}>
          <img
            src={slot3.image}
            alt={slot3.title}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DEFAULT_PREVIEW_SLOTS[3].image;
            }}
          />
        </BottomRightCard>
      </GridWrapper>
    </ShowcaseContainer>
  );
};

export default DiamondCluster;
