#!/bin/bash
# =============================================================================
# Image Optimization Script for Riviera Waterfront Mansion
# Generates optimized images in multiple sizes with WebP support
# =============================================================================

set -e

# Configuration
SOURCE_DIR="IMAGES"
OUTPUT_DIR="images/optimized"
THUMB_WIDTH=400
MEDIUM_WIDTH=800
LARGE_WIDTH=1600
JPEG_QUALITY_THUMB=75
JPEG_QUALITY_MEDIUM=80
JPEG_QUALITY_LARGE=85

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=============================================${NC}"
echo -e "${BLUE}  Riviera Image Optimization Script${NC}"
echo -e "${BLUE}=============================================${NC}"
echo ""

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}Error: Source directory '$SOURCE_DIR' not found!${NC}"
    exit 1
fi

# Create output directories
echo -e "${YELLOW}Creating output directories...${NC}"
mkdir -p "$OUTPUT_DIR/thumb"
mkdir -p "$OUTPUT_DIR/medium"
mkdir -p "$OUTPUT_DIR/large"
mkdir -p "$OUTPUT_DIR/webp/thumb"
mkdir -p "$OUTPUT_DIR/webp/medium"
mkdir -p "$OUTPUT_DIR/webp/large"

# Check for cwebp (WebP converter)
WEBP_AVAILABLE=false
if command -v cwebp &> /dev/null; then
    WEBP_AVAILABLE=true
    echo -e "${GREEN}WebP conversion enabled (cwebp found)${NC}"
else
    echo -e "${YELLOW}Warning: cwebp not found. WebP conversion will be skipped.${NC}"
    echo -e "${YELLOW}Install with: brew install webp${NC}"
fi

# Count total images
TOTAL=$(ls -1 "$SOURCE_DIR"/*.jpg "$SOURCE_DIR"/*.JPG 2>/dev/null | wc -l | tr -d ' ')
echo -e "${BLUE}Found $TOTAL images to process${NC}"
echo ""

# Process each image
COUNT=0
for img in "$SOURCE_DIR"/*.jpg "$SOURCE_DIR"/*.JPG; do
    # Skip if no matches (glob didn't expand)
    [ -e "$img" ] || continue
    
    COUNT=$((COUNT + 1))
    FILENAME=$(basename "$img")
    # Convert to lowercase and replace spaces with hyphens
    CLEAN_NAME=$(echo "$FILENAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    
    echo -e "${BLUE}[$COUNT/$TOTAL]${NC} Processing: $FILENAME"
    
    # Generate thumbnail (400px)
    echo -n "  Thumbnail... "
    sips -Z $THUMB_WIDTH "$img" --out "$OUTPUT_DIR/thumb/$CLEAN_NAME" -s formatOptions $JPEG_QUALITY_THUMB > /dev/null 2>&1
    echo -e "${GREEN}done${NC}"
    
    # Generate medium (800px)
    echo -n "  Medium... "
    sips -Z $MEDIUM_WIDTH "$img" --out "$OUTPUT_DIR/medium/$CLEAN_NAME" -s formatOptions $JPEG_QUALITY_MEDIUM > /dev/null 2>&1
    echo -e "${GREEN}done${NC}"
    
    # Generate large (1600px)
    echo -n "  Large... "
    sips -Z $LARGE_WIDTH "$img" --out "$OUTPUT_DIR/large/$CLEAN_NAME" -s formatOptions $JPEG_QUALITY_LARGE > /dev/null 2>&1
    echo -e "${GREEN}done${NC}"
    
    # Generate WebP versions if cwebp is available
    if [ "$WEBP_AVAILABLE" = true ]; then
        WEBP_NAME="${CLEAN_NAME%.jpg}.webp"
        
        echo -n "  WebP (thumb)... "
        cwebp -q 75 -resize $THUMB_WIDTH 0 "$img" -o "$OUTPUT_DIR/webp/thumb/$WEBP_NAME" > /dev/null 2>&1
        echo -e "${GREEN}done${NC}"
        
        echo -n "  WebP (medium)... "
        cwebp -q 80 -resize $MEDIUM_WIDTH 0 "$img" -o "$OUTPUT_DIR/webp/medium/$WEBP_NAME" > /dev/null 2>&1
        echo -e "${GREEN}done${NC}"
        
        echo -n "  WebP (large)... "
        cwebp -q 85 -resize $LARGE_WIDTH 0 "$img" -o "$OUTPUT_DIR/webp/large/$WEBP_NAME" > /dev/null 2>&1
        echo -e "${GREEN}done${NC}"
    fi
    
    echo ""
done

# Summary
echo -e "${BLUE}=============================================${NC}"
echo -e "${GREEN}Optimization Complete!${NC}"
echo -e "${BLUE}=============================================${NC}"
echo ""
echo "Output directories:"
echo "  - $OUTPUT_DIR/thumb/   (${THUMB_WIDTH}px wide)"
echo "  - $OUTPUT_DIR/medium/  (${MEDIUM_WIDTH}px wide)"
echo "  - $OUTPUT_DIR/large/   (${LARGE_WIDTH}px wide)"
if [ "$WEBP_AVAILABLE" = true ]; then
    echo "  - $OUTPUT_DIR/webp/    (WebP versions)"
fi
echo ""

# Calculate total size
ORIGINAL_SIZE=$(du -sh "$SOURCE_DIR" | cut -f1)
OPTIMIZED_SIZE=$(du -sh "$OUTPUT_DIR" | cut -f1)
echo -e "Original size:  ${RED}$ORIGINAL_SIZE${NC}"
echo -e "Optimized size: ${GREEN}$OPTIMIZED_SIZE${NC}"
echo ""
echo -e "${GREEN}Done! $COUNT images processed.${NC}"
